<script>
	import { createEventDispatcher } from 'svelte';
    // customEvent
	let dispatch = createEventDispatcher();
let name;
let age;
// let fire=false;
// let water=false;
const handleSubmit=()=>{
    const person={
        name,
        age,
        skills,
        color,
        id:Math.random()
    }
    //child component可以開放特定event 讓parent接收來update值
    dispatch('addPerson',person)
}
let color

//一次管理多選項資料，成立group儲存形式，一旦為true，會加入'fire'進入skills
let skills=[]
</script>

<form on:submit|preventDefault={handleSubmit}>
<input type="text" placeholder='name' bind:value={name}>
<!-- svelte will tansform value by type  -->
<input type="number" placeholder='age' bind:value={age}>
<label>skill</label>
<!-- <input type="checkbox" bind:checked={fire}>fire<br>
<input type="checkbox" bind:checked={water}>water<br> -->
<input type="checkbox" bind:group={skills} value='fire'>fire<br>
<input type="checkbox" bind:group={skills} value='water'>water<br>
<label>select color</label>
<select bind:value={color}>
    <option value="black">black</option>
    <option value="orange">orange</option>
    <option value="white">white</option>

</select>


<button>submit</button>
</form>