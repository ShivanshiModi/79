menu_list_array = ["Chicken Tandoori Pizza" , "Deluxe Veggie Pizza" ,"Paneer Tikka Pizza", "Veg Extravaganza Pizza", "Veg Margherita Pizza", "Veg Supreme Pizza" ];
topping_list_array = ["Double Cheeze Topping" , "Cheeze Garlic Topping" ,"Jelipino Cheeze Topping"];

function getmenu()
{
var htmldata="";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ menu_list_array[i] + '<br>';
            document.getElementById("display_menu").innerHTML = htmldata;
        }
    }
function gettopping()
{
topping_list_array.sort();
        // use the sort function as - menu_list_array.sort();
var htmldata=""
    for(var i=0;i<topping_list_array.length;i++){
              
        htmldata=htmldata+ topping_list_array[i]+'<br>';
    }
    document.getElementById("display_addedmenu").innerHTML = htmldata;	
        
        //give the appropriate id name as display_menu
}

function add_item()
{
var htmldata;
var item = document.getElementById("add_item").value;
var imgtags = '<img id="si" src = "im1.jpg">';
menu_list_array.push(item);
menu_list_array.sort();
      // use the sort function as - menu_list_array.sort();
//htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ imgtags+ menu_list_array[i]+'<br>';
        }
        //document.getElementById("im1").src = "item.jpg";
         document.getElementById("display_menu").innerHTML = htmldata;	
        	

      }

function add_top()
{
    var item=document.getElementById("add_item").value;
    topping_list_array.push(item);
	topping_list_array.sort();
      // use the sort function as - menu_list_array.sort();
      htmldata=""
        for(var i=0;i<topping_list_array.length;i++){
            
            htmldata=htmldata+ topping_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;	
}

