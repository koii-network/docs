---
title: Transaction Validation Unit in a Koii Validator
sidebar_position: 3
sidebar_label: TVU
pagination_label: Validator's Transaction Validation Unit (TVU)
---

TVU (Transaction Validation Unit) is the logic of the validator
responsible for validating and propagating blocks and processing
those blocks' transactions through the runtime.

<!-- ![TVU Block Diagram](/img/tvu.svg) -->

## Retransmit Stage

<!-- ![Retransmit Block Diagram](/img/retransmit_stage.svg) -->

<sub>This documentation incorporates substantial portions of the Solana documentation, adapted for Koii (K2). Solana’s architecture and underlying principles form the foundation of K2’s implementation. Content adapted under the terms of the [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/). See [Solana Documentation](https://docs.solana.com/) for more details.</sub>