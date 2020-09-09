<template>
   <div class="container">
      <div class="container">
         <div class="row">
            <div class="col-sm-12">
               <h1 class="appName">Food Truck</h1>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-sm-9">
            <div class="container">
               <div class="row">
                  <div v-for="item in items" :key="item.itemId" class="card col-sm-4 mt-2 " style="width: 18rem;">
                     <br>
                     <img class="card-img-top" :src="item.itemImgUrl" alt="Card image cap">
                     <div class="card-body">
                        <h5 class="card-title">{{item.itemName}}</h5>
                        <p class="card-text">{{item.itemPrice}}</p>
                        <a class="btn btn-primary" @click="addToOrder(item)">Add To Cart</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-sm-3 card">
            <br>
            <h5>Your Order</h5>
            <hr>
            <li v-for="order in orders" :key="order.itemId">
               <ul>{{order.itemName}} - {{order.itemPrice}}</ul>
            </li>
            <hr>
            <h6>Order Total: {{total | format2Digit}}</h6>
            <a class="btn btn-success" @click="placeTheOrder()">Place Order</a>
         </div>
      </div>
      <!-- Footer -->
      <footer class="page-footer font-small blue">
         <!-- Copyright -->
         <div class="footer-copyright text-center py-3">© 2020 Copyright:
            <a class="appName" href="http://github.com/vinodhThiagarajan1309/"> Vinodh Thiagarajan</a>
         </div>
         <!-- Copyright -->
      </footer>
      <!-- Footer -->
   </div>
</template>

<script>
import FoodTruckServices from "@/services/FoodTruckServices.js";
export default {
  name: 'FoodTruckHomeScreen',
  props: {
    msg: String
  },
  data () {
    return {
      items: [],
      orders: [],
      total: 0,
      enablePlaceOrder: false,
    }
  },
  created () {
    FoodTruckServices.getItems()
      .then(response => {
        this.items = response.data
      })
      .catch(error => {
        console.log('There was an error: ' + error.response)
      })
  },
  methods: {
    addToOrder(item) {
      if(this.orders.length < 10) {
this.orders.push(item);
this.total += item.itemPrice;
      } 
      
    },
    placeTheOrder() {
       var finalizedOrder = {
          'orderItems': this.orders.map(x=> x.itemName),
          'orderTotal': this.total
       }
       console.log(finalizedOrder.orderItems);
    }
  },
  filters: {
  format2Digit: function (value) {
    return value.toFixed(2);
  }
},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  display: inline-block;
  margin: 0 10px;
}

.appName {
  color: darkgoldenrod;
}

.card {
   background-color: #BEB0A7;
}

</style>
