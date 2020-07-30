"use strict";
// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = exports.gfs = void 0;
const execa = require("execa");
const fs = require("fs");
const nunjucks = require("nunjucks");
const path = require("path");
const util_1 = require("util");
const p_queue_1 = require("p-queue");
const srcPath = path.join(__dirname, '../../../src');
const apiPath = path.join(srcPath, 'apis');
const templatePath = path.join(srcPath, 'generator/templates/index.html.njk');
const docsPath = path.join(__dirname, '../../../docs');
const indexPath = path.join(docsPath, 'index.html');
exports.gfs = {
    mkdir: fs.mkdirSync,
    exists: fs.existsSync,
    writeFile: util_1.promisify(fs.writeFile),
    readdir: util_1.promisify(fs.readdir),
    execa,
};
/**
 * Iterate over each API directory, and use the `compodoc` tool to generate
 * reference API documentation in the `docs` folder.  This folder is ignored
 * in git, so a publish must be done with `npm run publish-docs`.
 *
 * To use this, run `npm run generate-docs`.
 */
async function main() {
    if (!exports.gfs.exists(docsPath)) {
        exports.gfs.mkdir(docsPath);
    }
    const children = await exports.gfs.readdir(apiPath);
    const dirs = children.filter(x => {
        return !x.endsWith('.ts');
    });
    const contents = nunjucks.render(templatePath, { apis: dirs });
    await exports.gfs.writeFile(indexPath, contents);
    const q = new p_queue_1.default({ concurrency: 50 });
    console.log(`Generating docs for ${dirs.length} APIs...`);
    let i = 0;
    const promises = dirs.map(dir => {
        return q
            .add(() => exports.gfs.execa(process.execPath, [
            '--max-old-space-size=8192',
            './node_modules/.bin/compodoc',
            `src/apis/${dir}`,
            '-d',
            `./docs/${dir}`,
        ]))
            .then(() => {
            i++;
            console.log(`[${i}/${dirs.length}] ${dir}`);
        });
    });
    await Promise.all(promises);
}
exports.main = main;
if (require.main === module) {
    main();
}
//# sourceMappingURL=docs.js.map