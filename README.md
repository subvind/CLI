inom
========

start command:
```
$ inom init
```
generates:
```
$ touch auto.inom
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

setup command:
```
$ inom install somedemo
```
generates:
```
<
  :name:~ "something",
  :packages:~ <
    :somestuff:~ "1.1.0",
    :someexample:~ "1.3.0",
    :somedemo:~ "1.2.0"
  >
>
```