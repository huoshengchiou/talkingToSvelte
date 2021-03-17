<script>
  //利用export來取得外面相同名稱的value，如果上一層不存在一樣變數走default
  export let key = "default value";
  export let value;
  export let passColor = "red";
</script>

<div>Hello {key}</div>
<div>color{passColor}</div>
