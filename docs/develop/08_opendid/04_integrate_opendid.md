---
id: integrate_opendid
title: Integrate OpenDID
---

OpenDID follows the [OpenID Connect 1.0
Specification](https://openid.net/specs/openid-connect-core-1_0.html#Introduction) and implements both the [Implicit Flow](https://openid.net/specs/openid-connect-core-1_0.html#ImplicitFlowSteps)
and the [Authorization Code Flow](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth). See [Demo Project](/docs/develop/opendid/demo_project) for an example of integrating OpenDID.


## Authorization Code Flow

Initiate the flow by redirecting to the **GET** `/api/v1/authorize` endpoint on the OpenDID Service and setting the following query
parameters:

* `response_type`: set value to `code` to indicate Authorization Code Flow.
* `client_id`: The client ID set in the config.yaml file.
* `redirect_uri`: OpenDID will redirect to this URL after authentication.
* `scope`: set value to `openid`.
* `state`: set to a secure random number.
* `nonce`: optional value, set to a secure random number.

**Example**:

```
GET /api/v1/authorize?
    response_type=code&
    client_id=example-client&
    redirect_uri=http://localhost:1606/callback.html&
    scope=openid&
    state=rkw49cbvd4azu5dsln1xbl&
    nonce=vedur4om49ei8w91jt7wt HTTP/1.1
```

After successful authentication, OpenDID will redirect back to the provided `redirect_uri` with `code` and `state` query
parameters.


**Example**:
```
/callback.html?
    code=lwDS1ZpQBwR4Vdm53_L8bWpUJ1mx9A0mA_-86dubTqzqzwGazx1RyLX4Z_qf&
    state=rkw49cbvd4azu5dsln1xbl
```

The `id_token` can be retrieved by calling the **POST** `/api/v1/token` and providing the following values in **form
serialization**:

* `code`: code value returned from `authorize`.
* `grant_type`: set value to "authorization_code".
* `redirect_uri`: the same `redirect_uri` used in `authorize`.
* `client_id`: the client ID set in the config.yaml file.
* `client_secret`: the client secret value set in the config.yaml file.

**Example**:

```
POST /api/v1/token HTTP/1.1
Content-Type: application/x-www-form-urlencoded

code=lwDS1ZpQBwR4Vdm53_L8bWpUJ1mx9A0mA_-86dubTqzqzwGazx1RyLX4Z_qf&
grant_type=authorization_code&
redirect_uri=http%3A%2F%2Flocalhost%3A1606%2Fcallback.html&
client_id=example-client&
client_secret=insecure_client_secret

```

The `id_token` is returned by the OpenDID Service in the response body serialized in a JSON object.

```json
{
   "access_token":"SsFhhSBMWsLeDMxVUVGreKARNwYxMZtGFfBr0-ZiH6iondSmwPRvQDqkG6Fh",
   "token_type":"bearer",
   "refresh_token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWQ6a2lsdDo0b0VkNENVV3RwbkxUVnZENVBFd2lMUmlqMWdzQmprS1JMbVpES2lCOEdqN2I2V0wiLCJ3M24iOiJjdXN0b20iLCJleHAiOjE3MTY4MTYwNjQsImlhdCI6MTcxNjgxNTQ2NCwiaXNzIjoiZGlkOmtpbHQ6NHJzQkE3dEQ1S1E4TDlXSGpGallRdUhrTWtha2NmSGRDNUNhUVVjVXh5VWpEVkhBIiwiYXVkIjoiYXV0aGVudGljYXRpb24iLCJwcm8iOnsiRW1haWwiOiJhYmR1bEBraWx0LmlvIn0sIm5vbmNlIjoidmVkdXI0b200OWVpOHc5MWp0N3d0In0.yOmE_9jWKcAu8LpjVx7IsFyOOvlKbgo2oC4Imf-qrLY",
   "id_token":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWQ6a2lsdDo0b0VkNENVV3RwbkxUVnZENVBFd2lMUmlqMWdzQmprS1JMbVpES2lCOEdqN2I2V0wiLCJ3M24iOiJjdXN0b20iLCJleHAiOjE3MTY4MTU1MjQsImlhdCI6MTcxNjgxNTQ2NCwiaXNzIjoiZGlkOmtpbHQ6NHJzQkE3dEQ1S1E4TDlXSGpGallRdUhrTWtha2NmSGRDNUNhUVVjVXh5VWpEVkhBIiwiYXVkIjoiYXBwbGljYXRpb24iLCJwcm8iOnsiRW1haWwiOiJhYmR1bEBraWx0LmlvIn0sIm5vbmNlIjoidmVkdXI0b200OWVpOHc5MWp0N3d0In0.YlRE9EGnSExQCb5m2iy4__58PZJlZdCZMsSvsuW4oj8"
}
```

:::note
In full-stack applications, calling the `token` endpoint is usually done through the backend to improve security.
:::


The `id_token` is a JWT signed by the JWT key-pair specified in the config.yaml file of the OpenDID Service, it can be verified using the JWT public key, for example, by the backend of the Web app.

## Implicit Flow


Initiate the flow by redirecting to the **GET** `/api/v1/authorize` endpoint on the OpenDID Service and setting the following query
parameters:

* `response_type`: set value to `id_token` to indicate Implicit Flow.
* `client_id`: The client ID set in the config.yaml file.
* `redirect_uri`: OpenDID will redirect to this URL after authentication.
* `scope`: set value to `openid`.
* `state`: set to a secure random number.
* `nonce`: optional value, set to a secure random number.

**Example**:

```
GET /api/v1/authorize?
    response_type=id_token&
    client_id=example-client&
    redirect_uri=http://localhost:1606/callback.html&
    scope=openid&
    state=o0fl4c9gwylymzw5f4ik&
    nonce=ia7sa06ungxdfzaqphk2 HTTP/1.1
```

After successful authentication, OpenDID will redirect back to the provided `redirect_uri` with `id_token` and `state`
**fragment components**.

**Example**:
```
/callback.html#
    id_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWQ6a2lsdDo0b0VkNENVV3RwbkxUVnZENVBFd2lMUmlqMWdzQmprS1JMbVpES2lCOEdqN2I2V0wiLCJ3M24iOiJjdXN0b20iLCJleHAiOjE3MTY4ODQ5MDYsImlhdCI6MTcxNjg4NDg0NiwiaXNzIjoiZGlkOmtpbHQ6NHJzQkE3dEQ1S1E4TDlXSGpGallRdUhrTWtha2NmSGRDNUNhUVVjVXh5VWpEVkhBIiwiYXVkIjoiYXBwbGljYXRpb24iLCJwcm8iOnsiRW1haWwiOiJhYmR1bEBraWx0LmlvIn0sIm5vbmNlIjoiOTFzN2ZnZDZvcjR3c2NkdGVtcXQifQ.xTy3Oyc5e-vlP10mGy0f9GqNU4LV97s77s-l7w5EwF0&
    refresh_token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJkaWQ6a2lsdDo0b0VkNENVV3RwbkxUVnZENVBFd2lMUmlqMWdzQmprS1JMbVpES2lCOEdqN2I2V0wiLCJ3M24iOiJjdXN0b20iLCJleHAiOjE3MTY4ODU0NDYsImlhdCI6MTcxNjg4NDg0NiwiaXNzIjoiZGlkOmtpbHQ6NHJzQkE3dEQ1S1E4TDlXSGpGallRdUhrTWtha2NmSGRDNUNhUVVjVXh5VWpEVkhBIiwiYXVkIjoiYXV0aGVudGljYXRpb24iLCJwcm8iOnsiRW1haWwiOiJhYmR1bEBraWx0LmlvIn0sIm5vbmNlIjoiOTFzN2ZnZDZvcjR3c2NkdGVtcXQifQ.87UHGid3OotxO8Wpfuw-1sc5fsQJVt5gc2cqp9dVHiw&
    state=nitctpl7nmqcpvob7xthrw&
    token_type=bearer
```
