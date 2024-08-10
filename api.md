# API

Orfeo's compiler lives in the cloud.

This means that every compilation gets called in the cloud.

In most cases, this remains oblivious to uses as they use
applications 

To compile Orfeo code, you either make a ```POST /compile``` request
to Orfeo's online REST API, or you use an application that makes
one for you. The PureData and Max/MSP Orfeo integrations are examples
of applications that take care of making API requests for you.






This document explains how to make requests to Orfeo's API.

## Request Formatting

### Endpoint

Requests should be made to this endpoint:

```http://orfeolang.com/api```

### API Versioning

When making requests, you should include the desired API version in the
Accept header.

```Accept: version=1```

::: info
Currently, only version 1 exists.
:::

::: warning
If you omit the API version from your requests, a default version will
be used. This can be dangerous since the default version may change in
the future. To guarantee response predictability, it is highly recommended
to always include the API version in every request.
:::

## Response Formatting










## GET /versions

**Request**

You can use a simple bodiless GET request to retrieve the list of all
available API versions as well as the default API version.

```bash
curl --header "Accept: version=1" http://orfeolang.com/api/versions
```

**Response**

```json
{
  "list": [ "1" ],
  "default": "1"
}
```

## GET /compilers

**Request**

You can use a simple bodiless GET request to retrieve the list of all
available compilers as well as the default compiler.

```bash
curl --header "Accept: version=1" http://orfeolang.com/api/compilers
```

**Response**

```json
{
  "list": [
    {
      "name": "Orfeo-JS 0.2.0",
      "source": "Orfeo 0.2.0",
      "target": "Musicline 0.2.0"
    },
    {
      "name": "Orfeo-JS 0.1.1",
      "source": "Orfeo 0.1.0",
      "target": "Musicline 0.1.0"
    }
  ],
  "default": {
    "name": "Orfeo-JS 0.2.0",
    "source": "Orfeo 0.2.0",
    "target": "Musicline 0.2.0"
  }
}
```

## POST /compile

A POST request with a body containing an obligatory program property giving the Orfeo program to compile, and an optional compiler property specifying a compiler to use.

Note: The default compiler is used if there is no compiler property.