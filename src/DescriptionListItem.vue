<template>
  <div>
    <dt class="font-semibold">
      <slot name="term"></slot>
    </dt>

    <dd class="mt-2 space-y-2">
      <slot></slot>
    </dd>
  </div>
</template>