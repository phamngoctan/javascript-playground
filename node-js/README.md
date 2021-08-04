# Basic terms in NODEJS

- Blocking IO (reads some data from the file synchronously)
- Non blocking IO (reads some data from the file asynchronously)
- Always favor non-blocking I/O over blocking I/O. JavaScript Event Loop is the key
- Non I/O operations??? doSomeHeavyCPUComputing(), if only one thread handling in JS, yes, the whole server is hanging. How to handle it? Using Cluster mode.
