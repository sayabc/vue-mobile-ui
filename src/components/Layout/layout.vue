<template>
  <div class="vmu_layout_container">

    <h2>Flex</h2>

    <div class="vmu_flex">
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
    </div>

    <div class="vmu_flex">
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
    </div>

    <div class="vmu_flex">
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
    </div>

    <div class="vmu_flex">
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
    </div>

    <div class="vmu_flex">
      <div class="vmu_flex_item_txt">
        vmu_txt
      </div>
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
    </div>

    <div class="vmu_flex">
      <div class="vmu_flex_item_txt">
        vmu_txt
      </div>
      <div class="vmu_flex_item">
        <div class="vmu_flex_item_txt">
          vmu_txt
        </div>
      </div>
      <div class="vmu_flex_item_txt">
        vmu_txt
      </div>
    </div>

  </div>
</template>

<style scoped>
.vmu_layout_container {
  padding: 0 16px;
}
.vmu_flex {
  display: flex;
  display: -webkit-flex;
  display: -webkit-box; /* BFC */
}
.vmu_flex_item {
  flex: 1;
  -webkit-box-flex: 1;
}
.vmu_flex_item_txt {
    padding: 0 10px;
    background-color: #ebebeb;
    color: #cfcfcf;
    height: 2.4em;
    line-height: 2.4em;
    margin: 6px; /* 这个有妙用 */
}
</style>
