<template>
  <span class="font-bold">{{ formattedData }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
  data: any;
  asIs?: boolean;
  dateFormat?: "short" | "full";
}>();

// Computed property to format the date if it is a valid date string
const formattedData = computed(() => {
  if (props.asIs) {
    return props.data;
  }
  if (typeof props.data == 'number') {
    return props.data.toLocaleString();
  }
  if (props.dateFormat && Date.parse(props.data)) {
    return formatDate(props.data, props.dateFormat);
  }
  return props.data;
});

// Function to get the formatted string from the Date object in DD/MM/YYYY format
const formatDate = (date: string, format: string) => {
  const formattedDate = new Date(date);
  const bcYear = formattedDate.getFullYear() + 543;

  if (format == "short")
    return formattedDate.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' }).replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/' + bcYear);
  else if (format == "full") {
    return formattedDate.toLocaleDateString('th-TH', { day: '2-digit', month: 'long' }) + ' พ.ศ. ' + bcYear;
  }
  return formattedDate;
}
</script>