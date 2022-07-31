<template>
<v-app>
<v-app-bar app color="ourange">
  <v-toolbar-title>
        <v-col cols="9">
        <v-img src="https://kotakode.com/static/media/kotakode-logo.6f6a3051.png"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

  </v-toolbar-title>
  <v-spacer></v-spacer>
<v-btn text>Tentang
</v-btn>
<v-btn text>Produk</v-btn>
<v-btn text>FAQ</v-btn>
<v-btn text>Events</v-btn>
<v-btn text>Partnership</v-btn>
<v-btn text>Academy</v-btn>
<v-btn >Masuk</v-btn>
<v-btn>Daftar</v-btn>
</v-app-bar>

<v-content>
  <v-card width="500" class="mx-auto mt-9">
    <v-card-title>  <v-col cols="10">
        <v-img src="https://kotakode.com/static/media/kotakode-logo.6f6a3051.png"
          class="my-3"
          contain
          height="200"
        />
      </v-col></v-card-title>
<v-card-text>
  <v-text-field label="Email/Username"/>
  <v-text-field label="Password" type="password"/>
</v-card-text>
<v-divider></v-divider>
<v-card-actions>
<v-btn color="success">Register</v-btn>
<v-btn color="info">Login</v-btn>
<h5>
  <br>
  atau join dengan</h5>
  <v-col cols="2">
        <v-img src="https://1.bp.blogspot.com/-Gk7PJfZlTKM/YI0265VKDVI/AAAAAAAAE20/tSbccfFLIPAGclfx2il52vPUdwR8TJJsQCLcBGAsYHQ/s1600/Logo%2BFacebook%2BFormat%2BPNG.png"  />
      </v-col>
      <v-col cols="2">
        <v-img src="https://image.pngaaa.com/555/25555-middle.png"  />
      </v-col>
 <v-col cols="2">
        <v-img src="https://i.pinimg.com/originals/30/b1/50/30b150cd489202db131009ac9540cec0.png"  />
      </v-col>
</v-card-actions>
  </v-card>
</v-content>
</v-app>
</template>
<script>
export default {

  data() 
  {
    return {

    }
  }
}
</script>