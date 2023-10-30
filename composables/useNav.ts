export function useNav() {

  const navigation = useState("nav", () => [
    {
      name: "Home",
      href: "/user/home",
      current: true, 
      checkUrl: "/home",
    },
    {
      name: "About",
      href: "/user/about",
      current: true, 
      checkUrl: "/about",
    },
    {
      name: "Shop",
      href: "/user/shop",
      current: true, 
      checkUrl: "/shop",
    },
    {
      name: "Product",
      href: "/user/product",
      current: true, 
      checkUrl: "/product",
    },
  ]);
  
  const routeNav = (val) => {
    navigation.value.map((obj) => {
      if(val.indexOf(obj.checkUrl) >=0) {
        obj.current = true;
      } else {
        obj.current = false;
      }
    });
  };
  
  return {
    navigation,
    routeNav
  }

}