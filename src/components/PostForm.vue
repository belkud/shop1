
<template>
  <div class="components">Файл PostForm</div>
     <form>
        <h3>Создание списка</h3>

  

        <!-- v-bind - связывает данные -->
        <!-- @input - впечатывает (отслеживает) изменения -->
        <!-- -bind:value="mass.model"
        @input="mass.model=$event.target.value" -->

        <!--! v-model - тоже делает двустороннее связывание -->
        <input 
        v-model="mass.model"
        class="element" 
        type="text" 
        placeholder="Модель">
        
        <input 
        v-model="mass.price"
        class="element" 
        type="text" 
        placeholder="Стоимость">
          <div class="btn">
            <button type="button" @click="createPost">Создать</button>
            <button @click="" type="button">Очистить</button>
          </div>
        </form>
        

        <button type="button2"  @click="addScore2">Счёт 2---{{ score2 }}</button>
</template>

<script >
export default {
  data(){
    return {
      score2: 0,
      mass: {
        model:'',
        price:'',
        number: 3,
      },
    }
  },
  methods: {
    clickNumber2(event){
      event.preventDefault()
      this.number2+=1
    },
    addScore2(event) {
      this.score2+=1
    },
    createPost(event) {
      // event.preventDefault()
      // или указать type="button" в самой кнопке
      this.mass.id = Date.now();
      this.mass.number++
      this.$emit('create2', {...this.mass});
      
      this.mass.model = ''
      this.mass.price = ''
      
    }
  } 
}

</script>

 

<style scoped>
.element {
  width: 100%;
  padding: 10px;
  margin: 10px;
}

.btn {
  margin-bottom: 55px;
  align-self: flex-end;
}
.btn>button{
  margin: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

.components {
    color: red;

}
</style>