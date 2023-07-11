inom
========
a command line interface to inomlang...

part of ecosystem...
- [fbd :: sync :: subvind/inomlang](https://github.com/subvind/inomlang)
- [www :: top :: subvind/ucimecu](https://github.com/subvind/ucimecu)
- [server :: backend :: subvind/isisis](https://github.com/subvind/isisis)
- [client :: frontend :: subvind/autoide](https://github.com/subvind/autoide)
- [cli :: npm :: subvind/inom](https://github.com/subvind/inom)

terminology:
- evelops are git repositories
- many evelops go into a bag
- bags are hosted on http servers
- envelops have a main.inom file where a main function exists

quick start:
```
# begin
$ npm install --gloab inom

# first
$ inom --help
```

init project:
```
# jump to a new directory
$ cd ~/Projects
$ mkdir example
$ cd ~/Projects/example

# initialize project
$ inom irst bag init
```
generates:
```
$ touch bag.inom
<
  :name:~ "something",
  :template:~ "amqp",
  :author:~ "someone",
  :version:~ "1.0.0",
  :description:~ "something that uses amqp",
  :homepage:~ "https://subvind.com",
  :license:~ "Fair Source 25 (v0.9).",
>
```

install a module:
```
$ inom irst bag nuzip --bagage=stuff
```
generates:
```
<
  :name:~ "something",
  :bagages:~ <
    :stuff:~ "1.1.0",
    :example:~ "1.3.0",
    :demo:~ "1.2.0"
  >
>
```
