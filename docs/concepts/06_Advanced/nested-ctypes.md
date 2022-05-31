# Nested CTypes

A Nested CType is a hierarchical composite schema that includes other CTypes as substructures by referencing them.
For example, a company could use a Nested CType that includes the required credentials, qualifications, health and safety certs, etc of its current employees.
When verifying a Nested CType, the sub-CTypes need to be available.

## Referencing

JSON-schema provides a referencing keyword `$ref` that can be used as a pointer from other JSON schemas. This allows CTypes to either reference fields in other CTypes or nest entire CTypes within one another, providing flexibility for several different use cases.

This facility requires all JSON objects to build the schema and allows the reuse of previous schemas, reducing the need for copy-and-paste.

A claim from a nested CType requires the given CType, a list of comprised schemas, the claim content and the address of the owner.

