# Universal Data Plane API Working Group (UDPA-WG)

# Goal

The objective of the Universal Data Plane API Working Group (UDPA-WG) is to bring together parties across the industry interested in a common control and configuration API for data plane proxies and load balancers. 

# Vision

The vision of the Universal data Plane API (UDPA) is articulated at [https://blog.envoyproxy.io/the-universal-data-plane-api-d15cec7a](https://blog.envoyproxy.io/the-universal-data-plane-api-d15cec7a). We will pursue a set of APIs that provide the de facto standard for L4/L7 data plane configuration, similar to the role played by OpenFlow at L2/L3/L4 in SDN.

The APIs will be defined canonically in proto3 and incrementally evolve from [existing Envoy xDS APIs](https://github.com/envoyproxy/data-plane-api) via a well defined [stable API versioning policy](https://docs.google.com/document/d/1xeVvJ6KjFBkNjVspPbY_PwEDHC7XPi0J5p1SqUXcCl8/edit#). APIs will cover service discovery, load balancing assignments, routing discovery, listener configuration, secret discovery, load reporting, health check delegation, etc.

We will evolve and mold the APIs to support client-side lookaside load balancing (e.g. gRPC-LB), data plane proxies beyond Envoy, hardware LB, mobile clients and beyond. We will strive to be vendor and implementation agnostic to the degree possible while not regressing on support for projects that have committed to UDPA in production (Envoy & gRPC-LB so far).

# Membership

Initial members will include representatives from the Envoy and gRPC projects. This will include Google and Lyft based maintainers, as well as members from Microsoft and Amazon. We are soliciting the wider data plane proxy community for additional interest in initial membership, since we feel that a truly universal API should reflect a diverse set of projects, organizations and individuals.

We would like to keep the working group small and tightly focussed on efficiently balancing incrementally improving the API while pursuing longer term strategic evolution. We will meet once every two weeks on Zoom and communicate via the [udpa-wg@lists.cncf.io](https://lists.cncf.io/g/udpa-wg/) mailing list.
