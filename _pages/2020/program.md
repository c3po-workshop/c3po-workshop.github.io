---
permalink: /2020/program
---

<!-- [Registration](https://docs.google.com/forms/d/1s7BDZ9BgFDhpwNF5W3i6a_YSqs7jJlSRl_e957sKEBQ/viewform?edit_requested=true<Paste>)
-->

The recordings of all sessions are available [here](https://www.youtube.com/playlist?list=PLMa5JEpVE7Jxi6iHPH2kQJFzGN_Yx4ypY).
{: .notice--info}

## Keynote Speaker
Chair: Julien Jaeger \\
**June 25th, 2020, 5pm CEST, 8am PDT**

[**Chunhua (Leo) Liao (LLNL) - Building Source-to-Source Tools for High-Performance Computing**](/presentations/2020/building_source-to-source_tools_for_hpc.pdf)
<a href="https://youtu.be/IZp_4enKg7U" target="_blank"><img src="/assets/video.jpg" alt="recording" width="20" height="20" border="0" /></a>

Computational scientists face numerous challenges when trying to exploit powerful and complex high-performance computing (HPC) platforms. These challenges arise in multiple aspects including productivity, performance, correctness and so on. In this talk, I will introduce a source-to-source approach to addressing HPC challenges. Our work is based on a unique compiler framework named ROSE. Developed at Lawrence Livermore National Laboratory, ROSE encapsulates advanced compiler analysis and optimization technologies into easy-to-use library APIs so developers can quickly build customized program analysis and transformation tools for C/C++/Fortran and OpenMP programs. Several example tools will be introduced, including the AST inliner, outliner, and a variable move tool. I will also briefly mention ongoing work related to benchmarks, composable tools, and training for compiler/tool developers.

---

## Sessions

### Session on Correctness
Chair: Peter Thoman \\
**June 25th, 2020, 6pm CEST, 9am PDT**

[**Jan Patrick Lehr (TU Darmstadt) - Compiler-assisted type-safe checkpointing**](/presentations/2020/compiler_assisted_type_safe_checkpointing.pdf)
<a href="https://youtu.be/exTbMbQtFWg" target="_blank"><img src="/assets/video.jpg" alt="recording" width="20" height="20" border="0" /></a>

TyCart is a tool for type-safe checkpoint/restart and extends the memory allocation sanitizer tool TypeART with type asserts. Type asserts let the developer specify type requirements on memory regions, and, in our example implementation, they are used to implement a typesafe interface for the existing checkpoint libraries FTI and VeloC. We evaluate our approach on a set of mini-apps, and an application from astrophysics. The approach shows runtime and memory overhead below 5% in smaller benchmarks. In the astrophysics application, the runtime overhead reaches 30% and the memory overhead 70%.

[**Tim Jammer (TU Darmstadt) - Automatic detection of MPI assertions**](/presentations/2020/automatic_detection_of_mpi_assertions.pdf)
<a href="https://youtu.be/n4ZOxTuCYM0" target="_blank"><img src="/assets/video.jpg" alt="recording" width="20" height="20" border="0" /></a>

The 2019 MPI standard draft specification includes the addition of defined communicator info hints. These hints are assertions that an application makes to an MPI implementation, so that a more optimized implementation is possible. The 2019 draft specifications defines four assertions: mpi_assert_no_any_tag, mpi_assert_no_any_source, mpi_assert_exact_length and mpi_assert_allow_overtaking. In this paper we will explore the capability of a Clang/LLVM based static analysis to check whether these assertions hold for a given program. With this tool, existing codebases can benefit from this new addition to the MPI standard without the need for costly human intervention.

---

### Session on Optimizations
Chair: Purushotham Bangalore \\
**June 25th, 2020, 7pm CEST, 10am PDT**

[**Van-Man Nguyen (CEA) - Automatic Code Motion to Extend MPI Nonblocking Overlap Window**](/presentations/2020/automatic_code_motion_to_extend_mpi_nonblocking_overlap_window.pdf)
<a href="https://youtu.be/q108_6bJdOY" target="_blank"><img src="/assets/video.jpg" alt="recording" width="20" height="20" border="0" /></a>
 
HPC applications rely on a distributed-memory parallel programming model to improve the overall execution time. This leads to spawning multiple processes that need to communicate with each other to make the code progress. But these communications involve overheads caused by network latencies or synchronizations between processes. One possible approach to reduce those overheads is to overlap communications with computations. MPI allows this solution through its nonblocking communication mode: a nonblocking communication is composed of an initialization and a completion call. It is then possible to overlap the communication by inserting computations between these two calls. The use of nonblocking collective calls is however still marginal and adds a new layer of complexity. In this paper we propose an automatic static optimization that (i) transforms blocking MPI communications into their nonblocking counterparts and (ii) performs extensive code motion to increase the size of overlapping intervals between initialization and completion calls. Our method is implemented in LLVM as a compilation pass, and shows promising results on two mini applications.

[**Adrian Munera Sanchez (BSC) - Static analysis to enhance programmability and performance in OmpSs-2**](/presentations/2020/static_analysis_to_enhance_programmability_and_performance_in_ompss.pdf)
<a href="https://youtu.be/uVHpjVHN_Xk" target="_blank"><img src="/assets/video.jpg" alt="recording" width="20" height="20" border="0" /></a>

Task-based parallel programming models based on compiler directives have proved their effectiveness at describing parallelism in High-Performance Computing (HPC) applications. Recent studies show that cutting-edge Real-Time applications, such as those for unmanned vehicles, can successfully exploit these models. In this scenario, OpenMP is a de facto standard for HPC, and is being studied for Real-Time systems due to its time-predictability and delimited functional safety. However, changes in OpenMP take time to be standardized because it sweeps along a large community. OmpSs, instead, is a task-based model for fast-prototyping that has been a forerunner of OpenMP since its inception. OmpSs-2, its successor, aims at the same goal, and defines several features that can be introduced in future versions of OpenMP. This work targets compiler-based optimizations to enhance the programmability and performance of OmpSs-2. Regarding the former, we present an algorithm to determine the data-sharing attributes of OmpSs-2 tasks. Regarding the latter, we introduce a new algorithm to automatically release OmpSs-2 task dependencies before a task has completed. This work evaluates both algorithms in a set of well-known benchmarks, and discusses their applicability to the current and future specifications of OpenMP.
