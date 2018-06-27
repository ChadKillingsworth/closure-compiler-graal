# closure-compiler-graal
Public distribution of closure compiler native images

[![Build Status](https://travis-ci.org/ChadKillingsworth/closure-compiler-graal.svg?branch=master)](https://travis-ci.org/ChadKillingsworth/closure-compiler-graal)

Includes both of the following packages:

 - [google-closure-compiler-osx](https://www.npmjs.com/package/google-closure-compiler-linux)
    [![npm version](https://badge.fury.io/js/google-closure-compiler-osx.svg)](https://badge.fury.io/js/google-closure-compiler-osx)
   
 - [google-closure-compiler-linux](https://www.npmjs.com/package/google-closure-compiler-linux)
    [![npm version](https://badge.fury.io/js/google-closure-compiler-linux.svg)](https://badge.fury.io/js/google-closure-compiler-linux)

Using [Graal](https://github.com/oracle/graal), compiles the [closure-compiler](https://github.com/google/closure-compiler) Java JAR file to a native image.
Removes the startup time penalty of the JVM and allows faster performance for small builds.
Also allows improved performance without requiring a JVM to be present.

The distributions are platform specific. Currently only Mac OS and Linux are supported by Graal.
