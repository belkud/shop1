

<template>
<div v-if="!isLogin" class=" flex flex-col gap-20">
    <h1 style="text-align: center; margin-top: 10%; font-weight: 600; font-size: 1.1em;">Вход на сайт</h1>
    <div>
        
    </div>
    <input class=" p-3 border rounded-md -mt-12 w-1/6 m-auto bg-sky-950" type="text" v-model="name" placeholder="Имя">
    <input class=" p-3 border rounded-md -mt-12 w-1/6 m-auto bg-sky-950" type="text" v-model="mail" placeholder="Почта">
    <input class=" p-3 border rounded-md -mt-12 w-1/6 m-auto bg-sky-950" type="password" v-model="password" placeholder="Пароль">
    <!-- <div>{{ password }}</div> -->
    <div class="error ">{{ this.error }}</div>
    <button class="btn"  @click="sendInfo">Отправить</button>
    <!-- (в конце разные цвета border) -->
</div>
<div class="user" v-for="user of users">
    <div>
        <div>Пользователь: <b>{{ user.name }}</b></div>
            <div>Почта: {{ user.mail }}</div>
        <div>Пароль: {{ user.password }} </div>
    </div>
<button class="btn" @click="deleteUser(index)">Удалить</button>
</div>
</template>


<script>

    export default {
        data(){
            return{
                name:'',
                mail:'',
                password:'',
                users:[],
                error:'',
                isLogin: false,
                // number:0,
            }
        }, methods:{
            sendInfo(){
                if (this.name=='') {
                    this.error = '(Введите имя)'
                  return 
                } else if(this.mail=='') {
                    this.error= '(Введите почту)'
                    return
                } else if (this.password=='') {
                    this.error = '(Введите пароль)'
                    return
                } else if (this.name==123 && this.mail==123 && this.password==123) {
                    this.error = 'Данные верны'
                    this.isLogin = true
                } else {
                    this.error = 'Вы ввели неверные данные'
                }

                this.users.push({
                    name: this.name,
                    mail: this.mail,
                    password: this.password,
                    // number: this.number
                    
                })
                this.name=''
                this.mail=''
                this.password=''
                // this.user.number++
                // this.$emit('sendInfo', {...this.user});
                // console.log(this.number)
            },
            deleteUser () {
                
                this.users.splice(0,1)
            }
        }
    }

</script>


 



<style scoped>
/* .menu{
    display: flex;
    flex-direction: column;
    gap: 20px;
} */
/* .menu>input{
    padding: 10px;
    border-radius: 5px;
    width: 20%;
    margin: 0 auto;
    background-color: lightblue;
} */
.error {
    padding: 0px;
    margin: 0 auto;
    margin-top: -50px;
    min-height: 25px;
}

.user {
    background-color: rgb(61, 171, 207);
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    margin-left: 30px;
    margin-right: 30px;
}

.user>div {
    display: flex;
    gap: 50px;
}

.btn {
    background-color: lightblue;
    margin-left: 55%;
    margin-top: -6%;
    transition: .3s;
    min-width: 150px;
}
.btn:hover {
    background-color:red;
    transition: .3s;

}
input::placeholder {
    color: white;
}
</style>



 







<!--!!!!!!!!!!!!!!!!!! ОТСЮДА НЕ УДАЛЯТЬ! -->

<!-- <template> -->
    <!-- <div class="components">Файл PostCheck</div> -->
    <!--! обычный вариант -->
    <!-- <button @click="checkScore++"> -->
        <!-- <slot>{{ checkScore }}</slot> -->
    <!-- </button> -->

    <!--! через функцию -->
    <!-- <button @click="checkButton">{{ checkScore2 }}</button> -->

    <!--! создание условия -->
    <!-- <div v-if="checkScore == 2">Сообщение:{{ info }}</div> -->

    <!-- <div v-if="checkScore >= 3 && checkScore <= 10">{{ info2 }}</div> -->
    
    <!-- <div style="margin-top: 25px;"> <span v-if="checkScore>=1">{{ info }}</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis reiciendis facilis voluptas! Magni, at impedit.<br> -->
        <!-- <span style="color: red;" v-if="checkScore>=1">{{ info2 }}</span> In incidunt vero, veritatis quis distinctio sunt eveniet iure, asperiores blanditiis ea ducimus eaque et.</div> -->
<!-- </template> -->

<!-- <script>
export default {
    data() {
        return {
            info: 'Hello world',
            info2: 'Вы ушли слишком далеко',
            checkScore: 0,
            checkScore2: 0,
        }
        console.log(3);
    },
    methods: {
        checkButton() {
            this.checkScore2 += 1
        },
    },
}
</script> -->




<!-- <style scoped>
.changeColor {
    color: red;
}
</style> -->