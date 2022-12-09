import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  charactersList: [],
  /**
   * @property {number}        count
   * @property {number}        pages
   * @property {string | null} next
   * @property {string | null} prev
   */
  paginationInfo: {},
  currentPage: 1,
  loading: false,
  selectedChar: null,
  activeFilters: null,
  searchText: ""
});

export function fetchCharacters () {

  store.loading = true;

  axios.get("https://rickandmortyapi.com/api/character", {

    params: {
      page: store.currentPage,
  
      ...store.activeFilters
    }
  })
   
    .then((resp) => {


      console.log("then invocato");


      store.charactersList = resp.data.results;
      store.paginationInfo = resp.data.info;

      console.log(store);

    
      setTimeout(() => {
      
        store.loading = false;
      }, 500);
    })

    .catch((error) => {
    
      console.log(error);

 
      console.log("Codice errore: ", error.response.status);


      store.loading = false;
    });
}