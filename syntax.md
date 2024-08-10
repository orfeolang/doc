# Syntax

## Raw Types

### Nonnegative Number

A nonnegative number is either an integer or a float that is zero or
more.

Nonnegative numbers in Orfeo should never start with a period, they
should always start with a digit: ```0.5``` instead of ```.5```.
This is to avoid confusables with rhythm dots.

```
0
0.5
42
10.10
```

### Time Signature

A time signature in Orfeo is composed of a nonnegative number as
nominator, the ```/``` as separator, and another nonnegative number
as denominator.

```
4/4
4.5/4
4/4.5
4/0
0/4
```

-- Talk about time signatures 2/3, time signatures with floats, and
also time signatures with 0 as nominator or denominator.

## Rests

In Orfeo, rests are similar to those in western music. They denote a
precise amount of time during which no note is produced.

Rests get compiled to the Musicline format to the rest event type
which is a dataless event type.

A rest of 1 second starting at time 0 in voice 1 would compile to this:

```musicline
0 1 rest
1 1 tail
```

Rests are indicated using the ```_``` sigil followed by an optional
duration which may either be a nonnegative number, or a time signature.
When no duration is given, a default duration of ```1``` is assigned.

> [!INFO]
> Rests which have a duration of zero are equivalent to writing nothing. \
> These include rests with a time signature nominator, or denominator of zero. \
> Ex: ```_0```, ```_0.0```, ```_0/4```, ```_4/0```

### Examples

Examples of allowed rests:

::: code-group

```orfeo
_ # Default of 1
_0
_1
_0.5
_14.625
_4/4
_4.5/4.5
```

```musicline
    # TODO
```

:::

A passage using only default rests:

::: code-group

```orfeo
=4/4 do _ ré _ | (_ mi) (_ fa sol) la si | do
```

```musicline
    # TODO
```

:::

Using time signature rests to put empty measures:

::: code-group

```orfeo
=flex _2/8 | _4/4 | _1/16 | _5/4
```

```musicline
    # TODO
```

:::

## Markers

Markers are used to mark specific moments in the score.

They can be used by applications to do things like play only a chosen
section of a score, or add markers in a DAW.

Markers start with the at sign ```@```, and can contain letters,
numbers, apostrophes, underscores, hyphens/minus signs, ahd periods.
Markers cannot finish with an underscore, hyphen/minus sign, nor a period.

```orfeo
    # Allowed characters in various portions of a marker.
@                   # start
a-z A-Z 0-9 ' _ . - # middle
a-z A-Z 0-9 '       # end
```

A marker can be placed anywhere, except before a duration.

```orfeo
    # A marker is disallowed before a duration.
(@myMarker =4/4 a b c d) # Will generate an error.
```

```orfeo
    # Example markers.
@intro
@part-A_section-I
@measure-44b
@-1
@.1
@A'
@A''
```

When an Orfeo file is compiled to Musicline file, the marker appears as
so:

```musicline
0 1 marker intro
```

----------------------------------------------------------------------

## Error Messages

In the unhappy event that the compiler encounters an error in your
Orfeo code, it will return an error message designed to help you
solve the problem.

These error messages are always displayed in the same format. Their
goal is to indicate that an error has occured, where it occured, and
what the error consists of.

The first line contains the ```===OOPS!===``` symbol followed by the
error location composed of the line number, the ```:``` separator,
and the character position. \
Ex: ```===OOPS!=== 2:4``` (line 2, character 4)

The second line shows a printout of the entire code line where the
error occurred indicating the precise error point with the eject
icon ```⏏```.

Finally, The subsequent line or lines describe the error.

Examples:

::: code-group

```[error]
===OOPS!=== 1:12
=4/4 do ré ⏏🤟 mi
Unknown token: 🤟
```

```orfeo [code]
=4/4 do ré 🤟 mi
```

:::

::: code-group

```[error]
===OOPS!=== 1:3
( ⏏_4.4.4 )
Malformed rest: _4.4.4
A rest must be a nonnegative number, or a time signature.
```

```orfeo [code]
( _4.4.4 )
```

:::

## Orfeo's Ecosystem

| Repository        | Type |  Location                                         |
| :---------------- | :--- | :------------------------------------------------ |
| Orfeo4Max         | -    | https://github.com/orfeolang/orfeo-for-max ⤴      |
| Orfeo4PureData    | -    | https://github.com/orfeolang/orfeo-for-puredata ⤴ |
| musicline2reaper  | -    | https://github.com/orfeolang/dataline2reaper ⤴    |
| Orfeo's doc       | -    | https://github.com/orfeolang/docs ⤴               |
| Orfeo's logo      | -    | https://github.com/orfeolang/logo ⤴               |
| Orfeo bugs        | -    | https://github.com/orfeolang/bugs ⤴               |
| API Consumer Raku | -    | https://github.com/orfeolang/api-consumer-raku ⤴  |





----------------------------------------------------------------------

<script setup>
    import { useData } from 'vitepress'
    const { page } = useData()
</script>

<pre>{{ page }}</pre>
