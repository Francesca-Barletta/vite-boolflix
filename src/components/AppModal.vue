<script>
import { store } from '../store.js'

export default {
    data() {
        return{
            store:store,
        }
    },
    props: {
        open: {
            type: Boolean,
            default: false
        },
        item: Object
    },
    methods: {
    
    },

}
</script>

<template>
<div v-if="open" @click="$emit('exit')" class="modal-wrapper">
    <div class="modal">
        <img class="modal-img" :src="'https://image.tmdb.org/t/p/w342/' + item.poster_path" alt="">
        <div class="modal-body">

            <p class="modal-title" v-if="item.name">{{ item.name }}</p>
            <p class="modal-title" v-else>{{ item.title }}</p>
            <p>{{ item.overview }}</p>
            
            <p>{{item.release_date}}</p>
            <span>
                <font-awesome-icon v-for="icon in item.vote" :key="icon" :icon="['fas', 'star']" />
                <font-awesome-icon v-for="icon in 5 - item.vote" :key="icon" :icon="['far', 'star']" />
            </span>
          
            <button v-if="this.store.isInFavorite(item)" class="action favorite" @click="$emit('favorite')">Rimuovi dalla tua lista</button>
            <button v-else class="action favorite" @click="$emit('favorite')">Aggiungi alla tua lista</button>


            <button class="action exit" @click="$emit('exit')">Esci</button>
        </div>

    </div>
</div>
</template>

<style lang="scss" scoped>
.modal-wrapper{
    position:fixed;
    z-index: 999;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: rgba(black, 0.8);
    display:flex;
    align-items:center;
    justify-content:center;
    padding:20px;
}
.modal{
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-around;
    background: black;
    width:70%;
    padding:16px;
    border-radius:4px;
    gap:16px;

    
  

    .modal-img{
        width:50%;
        
        object-fit:cover;
    }
    .modal-body{
    
    color:white;
    width:40%;
    margin:10px 20px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    align-items: center;
    .modal-title{
        font-weight: 700;
        font-size: 30px;
        margin-bottom: 40px;
    }
        .flag{
            width: 100px;;
        }
        .action{
            border:none;
            border-radius:20px;
            font-size:16px;
            line-height: 40px;
            display:flex;
            justify-content: center;
            align-items: center;
        }
        .favorite{
            color:white;
            width:70%;
           
            background: crimson;
            &:hover{
                background: rgb(146, 3, 32);
                font-weight: 700;
            }
        }
        .exit{
            color:white;
            width:50%;
            
            background: grey;
            &:hover{
                background:rgb(70, 68, 68) ;
                font-weight: 700;
            
            }
        }
    }
}
</style>