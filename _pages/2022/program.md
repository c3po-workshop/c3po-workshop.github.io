---
permalink: /2022/program
---

<script type="text/javascript" src="/assets/js/timeconvert.js"></script>

### Opening Statement
<p>
<script>
    var d = new Date(Date.UTC(2022, 6, 2, 12, 0));
    var d2 = new Date(Date.UTC(2022, 6, 2, 12, 5));
    myDateTime(d, d2);
</script>
Julien Jaeger
</p>

---
---

## Keynote
<p>
<script>
    var d = new Date(Date.UTC(2022, 6, 2, 12, 5));
    var d2 = new Date(Date.UTC(2022, 6, 2, 13, 0));
    myDateTime(d, d2);
</script>
Chair: TBD
</p>

Title: On the Benefits of Software Verification Competitions for HPC
**Markus Schordan**

Software has become indispensable in our daily lives, but if a
software system fails it can have considerable human or economical
consequences. Dynamic and static analysis tools can aid developers in
establishing and maintaining correctness of such software systems.

In this talk I present a high-level overview of how the field of
correctness tools has been aided by competitions in recent years, the
design principles of benchmark suites suitable for a fair comparison
of correctness tools, the importance of reproducibility for this
purpose, and how the communities involved in software verification
competitions have contributed to the design of benchmark suites that
have become a crucial factor in evaluating academic publications.

One concern regarding the correctness of HPC applications is the
existence of data races. I describe our design decisions in the
development of our data race benchmark suite DataRaceBench and reflect
on how our design principles may have contributed to its acceptance by
the community. I will also briefly summarize our own experience as
participants in software verification competitions and what
contributed to our error-free submissions throughout several years,
also discussing the challenges in achieving the correctness of
correctness tools.

Bio:

Markus Schordan is a senior computer scientist at Lawrence Livermore
National Laboratory in California.  He is author or co-author of 50+
peer-refereed journal/conference/workshop publications, and served as
program committee member in 25+ conference program committees, most
recently RC 2021, RC 2020, ISoLA 2020, SLE 2019. He is a full voting
member of the IFIP Working group 2.4 Software Implementation
Technology, served as Co-General Chair of CGO 2018, the International
Symposium on Code Generation and Optimization, and as Track Chair at
ISoLA 2020/18/16 software verification tracks. Throughout his career,
he has been working on aspects of software verification, compiler
construction, high-performance computing, reversible computation, and
parallel discrete event simulation. The combination of these
approaches gives him a unique perspective on the challenges in
automatically analyzing programs, detecting bugs, aiding developers in
writing correct programs, and optimizing programs to achieve high
performance.

---
---

## First Session
<p>
<script>
    var d = new Date(Date.UTC(2022, 6, 2, 13, 0));
    var d2 = new Date(Date.UTC(2022, 6, 2, 14, 0));
    myDateTime(d, d2);
</script>
Chair: TBD
</p>

**Lightweight Array Contraction by Trace-Based Polyhedral Analysis**
**Hugo Thievenaz**, Keiji Kimura and Christophe Alias
Array contraction is a compilation optimization used to reduce the memory consumption, by reducing the size of temporary arrays in a program while preserving its correctness. The usual approach to this problem is to perform a static analysis of the given program, creating overhead in the compilation cycle. In this work, we take a look at exploiting execution traces of programs of the polyhedral model, in order to infer reduced sizes for the temporary arrays used during calculations. We designed a four step process to reduce the storage requirements of a temporary array of a given scheduled program, in which we used an algorithm to deduce array access functions for which bounds are modulos of affine functions of parameters of the program. Our results show memory reductions of an order of magnitude on several benchmarks examples from the polyhedral community. Execution time is compared to a baseline implementation of a static algorithm, and results show speed-up factors up to 20.

---

**Compiler-assisted Instrumentation Selection for Large-scale C++ Codes**
Sebastian Kreutzer, Christian Iwainsky, Jan-Patrick Lehr and Christian Bischof
Code instrumentation is the primary method for collecting fine-grained performance data. As instrumentation introduces an inherent runtime overhead, it is essential to measure only those regions of the code which are most relevant to the analysis. In practice, the typical approach is to define filter files manually. Prior projects aim to automate this process using static analysis. Specifically, InstRO enables tailored instrumentation via sophisticated user-defined selection of code regions. However, due to the need for whole-program call-graph analysis, its application on large-scale scientific codes is currently impractical. In this work, we present the new instrumentation tool CaPI (short for "Compiler-assisted Performance Instrumentation"), which is targeted towards such large-scale applications. We demonstrate its application on the CFD framework OpenFOAM. Our evaluation shows that a hybrid approach of CaPI and existing profile-guided filtering outperforms profile-guided filtering alone. Furthermore, we identify correctness and usability issues and propose possible avenues to improve CaPI, as well as compiler-assisted instrumentation tools in general.

---
---

## Second Session
<p>
<script>
    var d = new Date(Date.UTC(2022, 6, 2, 14, 30));
    var d2 = new Date(Date.UTC(2022, 6, 2, 15, 0));
    myDateTime(d, d2);
</script>
Chair: TBD
</p>

**Detecting scale-induced overflow bugs in production HPC codes**
Justs Zarins, Michele Weiland, Paul Bartholomew, Leigh Lapworth and Mark Parsons
Scaling bugs - errors that only manifest at large scale simulations, in terms of number of parallel workers or input size - are critical to detect early in the testing of HPC codes. If missed, these bugs can cause applications to either crash at runtime during production runs or, even worse, silently continue and corrupt results. This results in wasting vast amounts of resources and the crash might not provide any useful debugging information. Laguna et al presented a method for solving this in[1] using an approach where scale variables are traced throughout an application statically and potentially overflowing instructions are detected, with further refinements done by running a few small scale experiments. However, their algorithm is not able to trace multiple code patterns found in production HPC applications, for example code modularity, and has not been applied to Fortran applications. We present an extension to their algorithm which addresses these issues thus enabling us to find scaling bugs in complex real applications where they could not be found before. The key features that enable this are backward/forward tracing and optimistic GEP comparison.

---
---

## Panel

<p>
<script>
    var d = new Date(Date.UTC(2022, 6, 2, 15, 0));
    var d2 = new Date(Date.UTC(2022, 6, 2, 16, 0));
    myDateTime(d, d2);
</script>
Chair: TBD
</p>

TBD

---
---

### Closing Statement
<p>
<script>
    var d = new Date(Date.UTC(2022, 6, 2, 16, 0));
    var d2 = new Date(Date.UTC(2022, 6, 2, 16, 5));
    myDateTime(d, d2);
</script>
Emmanuelle Saillard
</p>
