/**
 * Copyright 2020 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { register_user, save_game_data, get_game_data, verify_and_save_purchase_token, check_subscription_price_change} from './controller/functions/unity';

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'register_user') {
  exports.register_user = register_user;
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'verify_and_save_purchase_token') {
  exports.verify_and_save_purchase_token = verify_and_save_purchase_token;
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'save_game_data') {
  exports.save_game_data = save_game_data;
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'get_game_data') {
  exports.get_game_data = get_game_data;
}

if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === 'check_subscription_price_change') {
  exports.check_subscription_price_change = check_subscription_price_change;
}
