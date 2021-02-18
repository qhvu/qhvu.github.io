$(function(){
  $('#Container').mixItUp({
    load: {
      filter: '' 
    },
    controls: {
      toggleFilterButtons: true,
      toggleLogic: 'or'
    },
    callbacks: {
      onMixEnd: function(state){
        console.log(state.activeFilter)
      }
    }
  });
});