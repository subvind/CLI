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

init bag:
```
# jump to a new directory
$ cd ~/Inom
$ mkdir inom_bags
$ cd ~/Inom/inom_bags

# initialize project
$ inom irst bag create
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

install a project into bag:
```
$ inom irst bag zipper --accept=stuff
$ inom irst bag zipper --reject=messy
```
generates:
```
<
  :name:~ "something",
  :envelopes:~ <
    :stuff:~ {
      :template:~ "amgp"
    },
    :example:~ {
      :template:~ "cli"
    },
    :demo:~ {
      :template:~ "http"
    }
  >
>
```
