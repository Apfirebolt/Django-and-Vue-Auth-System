<template>
  <svg :class="dimensions" :fill="fillColor" :stroke="color" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="path" />
  </svg>
</template>
<script>
export default {
  name: 'SVGIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      default: 6,
      required: false,
    },
    width: {
      type: Number,
      default: 6,
      required: false,
    },
    color: {
      type: String,
      default: '#BFBFBF',
      required: false,
    },
    fillColor: {
      type: String,
      default: 'none',
      required: false,
    },
  },
  data() {
    return {
      path: '',
      dimensions: '',
    };
  },
  mounted() {
    this.selectIcon();
    this.dimensionClasses();
  },
  methods: {
    dimensionClasses() {
      let height = 'h-6';
      let width = 'w-6';
      if (this.height) {
        height = `h-${this.height}`;
      }
      if (this.width) {
        width = `w-${this.width}`;
      }
      this.dimensions = [height, width].join(' ');
    },
    selectIcon() {
      switch (this.name) {
        case 'document':
          this.path = 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z';
          break;
        case 'folder':
          this.path = 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z';
          break;
        case 'adjustments':
          this.path = 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4';
          break;
        case 'upload':
          this.path = 'M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12';
          break;
        default:
          this.path = '';
      }
    },
  },
};
</script>
