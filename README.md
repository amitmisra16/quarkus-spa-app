# quarkus-spa-app

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: <https://quarkus.io/>.

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:

```shell script
./mvnw quarkus:dev
```

> **_NOTE:_**  Quarkus now ships with a Dev UI, which is available in dev mode only at <http://localhost:8080/q/dev/>.

## Packaging and running the application

The application can be packaged using:

```shell script
./mvnw package
```

It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/quarkus-app/lib/` directory.

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

If you want to build an _über-jar_, execute the following command:

```shell script
./mvnw package -Dquarkus.package.jar.type=uber-jar
```

The application, packaged as an _über-jar_, is now runnable using `java -jar target/*-runner.jar`.

## Creating a native executable

You can create a native executable using:

```shell script
./mvnw package -Dnative
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using:

```shell script
./mvnw package -Dnative -Dquarkus.native.container-build=true
```

You can then execute your native executable with: `./target/quarkus-spa-app-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult <https://quarkus.io/guides/maven-tooling>.

## Related Guides

- Quinoa ([guide](https://quarkiverse.github.io/quarkiverse-docs/quarkus-quinoa/dev/index.html)): Develop, build, and serve your npm-compatible web applications such as React, Angular, Vue, Lit, Svelte, Astro, SolidJS, and others alongside Quarkus.

## Provided Code

### Quinoa

Quinoa codestart added a tiny Vite app in src/main/webui. The page is configured to be visible on <a href="/quinoa">/quinoa</a>.

[Related guide section...](https://quarkiverse.github.io/quarkiverse-docs/quarkus-quinoa/dev/index.html)

### REST API

Using the `io.quarkus:quarkus-rest` extension, the required dependencies for created REST APIs were enabled. A REST endpoint `/count` is added and accordingly the code under `App.jsx` is updated to call this endpoint for retrieving the button click count which is maintained in a static variable on server side.

### Persistence Layer

Add the following extensions to the project - 
- `io.quarkus:quarkus-hibernate-orm-panache`
- `io.quarkiverse.jdbc:quarkus-jdbc-sqlite`

#### Entity and Repository

This tutorial uses Entity/Repository pattern instead of Active record. In either case the approach for setting up the database will be same. 

The only requirement for SQLITE DB is `.db` file, which will be referenced in the `application.properties` file like so -
`quarkus.datasource.jdbc.url = jdbc:sqlite:quarkus-spa-app.db`

Once the application comes up with the entity and repository defined you should see the following logs on the console - 

```shell
[Hibernate] 
    create table HTE_Counter(counter integer, rn_ integer not null, id bigint, lastUpdated timestamp, hib_sess_id char not null, primary key (rn_, hib_sess_id))
[Hibernate] 
    drop table if exists Counter
[Hibernate] 
    drop table if exists Counter_SEQ
[Hibernate] 
    create table Counter (
        counter integer,
        id bigint not null,
        lastUpdated timestamp,
        primary key (id)
    )

[Hibernate] 
    create table Counter_SEQ (
        next_val bigint
    )

[Hibernate] 
    insert into Counter_SEQ values ( 1 )
[Hibernate] insert into Counter (id, counter, lastUpdated) values (1, 0, current_timestamp)
```

This indicates that the required table(s) have been created and necessary record has been created.

