inam
========
a command line interface to inamlang...

part of ecosystem...
- [fbd :: sync :: subvind/inamlang](https://github.com/subvind/inamlang)
- [www :: top :: subvind/ucimecu](https://github.com/subvind/ucimecu)
- [server :: backend :: subvind/isisis](https://github.com/subvind/isisis)
- [client :: frontend :: subvind/autoide](https://github.com/subvind/autoide)
- [cli :: npm :: subvind/inam](https://github.com/subvind/inam)

terminology:
- evelops are git repositories
- many evelops go into a bag
- bags are hosted on http servers
- envelops have a main.inam file where a main function exists

quick start:
```
# begin
$ npm install --gloab inam

# first
$ inam --help
```

init bag:
```
# jump to a new directory
$ cd ~/inam
$ mkdir inam_bags
$ cd ~/inam/inam_bags

# initialize project
$ inam irst bag create
```
generates:
```
$ touch bag.inam
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
$ inam irst bag zipper --accept=stuff
$ inam irst bag zipper --reject=messy
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
