import {reactive} from "vue";
import axios from "axios";


export const store = reactive({
    peoplesList: [],
loading:false



});
export function fetchPeoples(){
    store.loading = true;

    axios.get("https://swapi.dev/api/people/")
.then((resp)=>{
    store.peoplesList = resp.data.results;



    console.log(store);
    setTimeout(() => {
        // Impostiamo a false il loading per nascondere la schermata di caricamento
        store.loading = false;
      }, 2000);

})

.catch((error) => {
   
    console.log(error);

   
    console.log("Codice errore: ", error.response.status);


    store.loading = false;
  });

}