# Syntax

## Markers

Markers are used to mark moments of a score.

They can be used by applications to do things like play only a chosen
section of a score, or add markers in a DAW.

Markers start with the at sign ```@```, and can contain letters,
numbers, apostrophes, underscores, hyphens/minus signs, ahd periods.
Markers cannot finish with an underscore, hyphen/minus sign, nor a period.

```
    # Allowed characters in various portions of a marker.
@                   # start
a-z A-Z 0-9 ' _ . - # middle
a-z A-Z 0-9 '       # end
```

```
    # Example markers.
@intro
@part-A_section-I
@measure-44b
@-1
@.1
@A'
@A''
```
