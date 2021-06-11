---
permalink: /2021/program
---

### Opening Statement
14:00-14:10 CEST \\
Emmanuelle Saillard

## Keynote Speaker
Chair: Purushotham Bangalore \\
**July 2nd, 2021, 14:10 - 14:55 CEST**

Ira Baxter - TBD

<!-- Ira Baxter - TITLE
ABSTRACT-->

## First Session
Chair: Peter Pirkelbauer \\
**July 2nd, 2021, 15:10 - 16:40 CEST**

**Automatic partitioning of MPI operations in MPI+OpenMP applications** \\
**Tim Jammer** and Christian Bischof

The upcoming MPI standard includes a new chapter about partitioned point to point communication operations. These partitioned operations allow multiple actors of one MPI process (e.g. multiple threads) to contribute data to one communication operation. These operations are designed to mitigate current problems in multithreaded MPI programs, with some work suggesting a substantial performance benefit (up to 26%) when using these operations compared to their existing non-blocking counterparts. 
In this work, we explore the possibility for the compiler to automatically partition sending operations across multiple OpenMP threads. For this purpose, we developed an LLVM compiler pass that partitions MPI sending operations across the different iterations of penMP for loops. We demonstrate the feasibility of this approach by applying it to 2D stencil codes, observing very little overhead while the correctness of the codes is sustained. Therefore, this approach facilitates the usage of these new additions to the MPI standard for existing codes.

---

Refactoring for Performance with Semantic Patching: Case Study with Recipes \\
Michele Martone and Julia Lawall(speaker)

Development of an HPC simulation code may take years of a domain scientists' work. Over that timespan, the computing landscape evolves, efficient programming best practices change, 
APIs of performance libraries change, etc. A moment then comes where the entire codebase requires a thorough performance lift. In the luckiest case, the required intervention is limited to a few hot loops.  
In practice, much more is needed. This paper describes an activity of programmatic refactoring of >200k lines of C code by means of source-to-source translation. The context is that of a so-called high level support provided to the domain scientists community by a HPC service center. The motivation of this short paper is the immediate reuse potential of these techniques. 

---

Potential of Interpreter Specialization for Scientific Computing \\
Wei He(speaker) and Michelle Mills Strout

Scientists frequently implement data analyses in high-level programming languages such as Python, Perl, Lua, and R. Many of these languages are inefficient due to the overhead of being dynamically typed and interpreted. In this paper, we estimate the potential performance improvement of domain-specific interpreter specialization for scientific workloads and evaluate how the characteristics of scientific workloads affect the specialization, both positively and negatively. Assisted by compilers, we specialize the Lua and CPython interpreters at source-level using the script being interpreted and the data types during the interpretation as invariants for five common tasks from real scientific computing workloads. Through our evaluation, we estimate 9.0--39.6% performance improvement for benchmarks that perform data loading, histogram computation, data filtering, data transformation, and dataset shuffle. The improvements are an estimate, because they depend on profiling results about data types. We report the details of our evaluation and present a semi-automatic method for performance benefit estimation of interpreter specialization.

## Second Session
Chair: Peter Thoman \\
**July 2nd, 2021, 16:55 - 17:55 CEST**

heimdallr: Improving Compile Time Correctness Checking for Message Passing with Rust \\
Michael Blesel(speaker), Michael Kuhn, and Jannek Squar

Message passing is the foremost parallelization method used in high-performance computing (HPC). Parallel programming in general and especially message passing strongly increase the complexity and susceptibility to errors of programs. The de-facto standard technologies used to realize message passing applications in HPC are MPI with C/C++ or Fortran code. These technologies offer high performance but do not come with many compile-time correctness guarantees and are quite error-prone. This paper presents our work on a message passing library implemented in Rust that focuses on compile-time correctness checks. In our design, we apply Rust's memory and concurrency safety features to a message passing context and show how common error classes from MPI applications can be avoided with this approach. 
Problems with the type safety of transmitted messages can be mitigated through the use of generic programming concepts at compile time and completely detected during runtime using data serialization methods. Our library is able to use Rust's memory safety features to achieve data buffer safety for non-blocking message passing operations at compile time. 
A performance comparison between our proof of concept implementation and MPI is included to evaluate the practicality of our approach. While the performance of MPI could not be beaten, the results still are promising. Moreover, we are able to achieve clear improvements in the aspects of correctness and usability.

---

Negative Perceptions About the Applicability of Source-to-Source Compilers in HPC: A Literature Review \\
Reed Milewicz(speaker), Peter Pirkelbauer, Prema Soundararajan, Hadia Ahmed and Tony Skjellum

Source-to-source compilation (also known as S2S compilation, transcompilation or transpilation), refers to compiler technologies that map source code inputs to source code outputs. They are distinct from compilers and other similar technologies. S2S techniques are commonly used to enable fluent translation between high-level programming languages, to perform large-scale refactoring operations, and to facilitate instrumentation for dynamic analysis. Negative perceptions about S2S's applicability in High Performance Computing (HPC) are studied and evaluated here. This is a first study that brings to light reasons why scientists do not use source-to-source techniques for HPC. The primary audience for this paper are those considering S2S technology in their HPC application work.

### Closing Statement
17:55 - 18:00 CEST\\
Julien Jaeger
