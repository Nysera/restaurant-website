const menu = function() {
    // menu page container
    const menuPageContainer = document.createElement("div");
    menuPageContainer.classList.add("menu-page");

    // menu page intro
    const menuPageIntro = document.createElement("div");
    menuPageIntro.classList.add("menu-intro");
    menuPageContainer.append(menuPageIntro);

    // menu page intro container
    const menuPageIntroContainer = document.createElement("div");
    menuPageIntroContainer.classList.add("container");
    menuPageIntro.append( menuPageIntroContainer); 

     // menu page intro wrapper
     const menuPageIntroWrapper = document.createElement("div");
     menuPageIntroWrapper.classList.add("intro-wrapper");
     menuPageIntroContainer.append( menuPageIntroWrapper); 

    // intro h1
     const menuPageIntroWrapperH1 = document.createElement("h1");
     menuPageIntroWrapperH1.innerHTML = "Our Menu";
     menuPageIntroWrapper.append( menuPageIntroWrapperH1);
     
    // intro paragraph
     const menuPageIntroWrapperParagraph = document.createElement("p");
     menuPageIntroWrapperParagraph.innerHTML = "In semper neque tortor, ac ultrices est venenatis in. Ut porttitor id sem id malesuada.";
     menuPageIntroWrapper.append( menuPageIntroWrapperParagraph);

    // menu wrapper
    const menuPageMenuWrapper = document.createElement("div");
    menuPageMenuWrapper.classList.add("menu-wrapper");
    menuPageContainer.append(menuPageMenuWrapper);

    // menu container
    const menuPageMenuWrapperContainer = document.createElement("div");
    menuPageMenuWrapperContainer.classList.add("container");
    menuPageMenuWrapper.append(menuPageMenuWrapperContainer);

    // menu grid - Entrees
    const menuPageMenuGridEntrees = document.createElement("div");
    menuPageMenuGridEntrees.classList.add("grid");
    menuPageMenuWrapperContainer.append(menuPageMenuGridEntrees);

    // menu grid title
    const menuPageMenuGridTitleEntrees = document.createElement("h2");
    menuPageMenuGridTitleEntrees.innerHTML = "Entrées";
    menuPageMenuGridTitleEntrees.classList.add("grid-title");
    menuPageMenuWrapperContainer.append(menuPageMenuGridTitleEntrees);
    menuPageMenuGridEntrees.append(menuPageMenuGridTitleEntrees);

    // menu grid item wrapper
    const menuPageMenuGridItemWrapperEntrees = document.createElement("div");
    menuPageMenuGridItemWrapperEntrees.classList.add("q1");
    menuPageMenuGridEntrees.append(menuPageMenuGridItemWrapperEntrees);

    // Menu items
    const menuItems = {
        entrees: {
            dishes: [
                {
                    name: "Garlic Noodles",
                    description: "mushrooms | scallions | parmesan",
                    price: "$12.00"
                },
                {
                    name: "Seared Pork Belly",
                    description: "tomato biscuit | marinated tomatoes | pesto purée | lavender jus",
                    price: "$14"
                },
                {
                    name: "Mac & Cheese",
                    description: "cheese | bacon | rye breadcrumbsn",
                    price: "$14"
                },
                {
                    name: "Roasted Beets",
                    description: "beet gazpacho | strawberries | green goddess | whipped strawberry boursi",
                    price: "$14.00"
                },
                {
                    name: "Cripsy Octopus",
                    description: "confit potatoes | pearl onions | blistered shishitos | cotija | creamy salsa verde | almond corn purée",
                    price: "$12.00"
                }
            ]
        },
        mains: {
            dishes: [
                {
                    name: "Fried Chicken Sandwich",
                    description: "lettuce | ranch | pickles",
                    price: "$12.00"
                },
                {
                    name: "Blackened Salmon",
                    description: "confit potatoes | pearl onions | blistered shishitos | black bean purée | poblano cream",
                    price: "$25.00"
                },
                {
                    name: "Jidori Chicken Breast",
                    description: "truffle risotto | asparagus | maitake mushrooms | asparagus mint purée | chamomile brown butter",
                    price: "$25.00"
                }
            ]
        },
        deserts: {
            dishes: [
                {
                    name: "Peanut Butter Torte",
                    description: "chocolate stout glaze | caramel | peanuts",
                    price: "$9.00"
                },
                {
                    name: "Crème Brûlée Bread Pudding",
                    description: "seasonal fruit | chocolate chip | vanilla ice creamm",
                    price: "$9.00"
                },
                {
                    name: "Peach Galette",
                    description: "granola | peach glaze | puff pastry | mascarpone ice cream",
                    price: "$9.00"
                }
            ]
        }
    };

    // entrees loop
    for (let i = 0; i < menuItems.entrees.dishes.length; i++) {
        // menu grid item
        const MenuGridItem = document.createElement("div");
        MenuGridItem.classList.add("menu-item");
        menuPageMenuGridItemWrapperEntrees.append(MenuGridItem);

        // menu grid item title
        const MenuGridItemTitle = document.createElement("div");
        MenuGridItemTitle.classList.add("menu-item-title");
        MenuGridItem.append(MenuGridItemTitle);

        // menu grid item title title
        const MenuGridItemTitleTitle = document.createElement("div");
        MenuGridItemTitleTitle.classList.add("title");
        MenuGridItemTitleTitle.innerHTML = menuItems.entrees.dishes[i].name;
        MenuGridItemTitle.append(MenuGridItemTitleTitle);

        // menu grid item title Price
        const MenuGridItemTitlePrice = document.createElement("div");
        MenuGridItemTitlePrice.classList.add("price");
        MenuGridItemTitlePrice.innerHTML = menuItems.entrees.dishes[i].price;
        MenuGridItemTitle.append(MenuGridItemTitlePrice);

        // menu grid item description
        const MenuGridItemDescription = document.createElement("div");
        MenuGridItemDescription.classList.add("menu-item-description");
        MenuGridItemDescription.innerHTML = menuItems.entrees.dishes[i].description;
        MenuGridItem.append(MenuGridItemDescription);
    };

    // menu grid - Mains
    const menuPageMenuGridMains = document.createElement("div");
    menuPageMenuGridMains.classList.add("grid");
    menuPageMenuWrapperContainer.append(menuPageMenuGridMains);

    // menu grid title
    const menuPageMenuGridTitleMains = document.createElement("h2");
    menuPageMenuGridTitleMains.innerHTML = "Main Course";
    menuPageMenuGridTitleMains.classList.add("grid-title");
    menuPageMenuWrapperContainer.append(menuPageMenuGridTitleMains);
    menuPageMenuGridMains.append(menuPageMenuGridTitleMains);

    // menu grid item wrapper
    const menuPageMenuGridItemWrapperMains = document.createElement("div");
    menuPageMenuGridItemWrapperMains.classList.add("q1");
    menuPageMenuGridMains.append(menuPageMenuGridItemWrapperMains);

    // mains loop
    for (let i = 0; i < menuItems.mains.dishes.length; i++) {
        // menu grid item
        const MenuGridItem = document.createElement("div");
        MenuGridItem.classList.add("menu-item");
        menuPageMenuGridItemWrapperMains.append(MenuGridItem);

        // menu grid item title
        const MenuGridItemTitle = document.createElement("div");
        MenuGridItemTitle.classList.add("menu-item-title");
        MenuGridItem.append(MenuGridItemTitle);

        // menu grid item title title
        const MenuGridItemTitleTitle = document.createElement("div");
        MenuGridItemTitleTitle.classList.add("title");
        MenuGridItemTitleTitle.innerHTML = menuItems.mains.dishes[i].name;
        MenuGridItemTitle.append(MenuGridItemTitleTitle);

        // menu grid item title Price
        const MenuGridItemTitlePrice = document.createElement("div");
        MenuGridItemTitlePrice.classList.add("price");
        MenuGridItemTitlePrice.innerHTML = menuItems.mains.dishes[i].price;
        MenuGridItemTitle.append(MenuGridItemTitlePrice);

        // menu grid item description
        const MenuGridItemDescription = document.createElement("div");
        MenuGridItemDescription.classList.add("menu-item-description");
        MenuGridItemDescription.innerHTML = menuItems.mains.dishes[i].description;
        MenuGridItem.append(MenuGridItemDescription);
    };

    // menu grid - Deserts
    const menuPageMenuGridDeserts = document.createElement("div");
    menuPageMenuGridDeserts.classList.add("grid");
    menuPageMenuWrapperContainer.append(menuPageMenuGridDeserts);

    // menu grid title
    const menuPageMenuGridTitleDeserts = document.createElement("h2");
    menuPageMenuGridTitleDeserts.innerHTML = "Deserts";
    menuPageMenuGridTitleDeserts.classList.add("grid-title");
    menuPageMenuWrapperContainer.append(menuPageMenuGridTitleDeserts);
    menuPageMenuGridDeserts.append(menuPageMenuGridTitleDeserts);

    // menu grid item wrapper
    const menuPageMenuGridItemWrapperDeserts = document.createElement("div");
    menuPageMenuGridItemWrapperDeserts.classList.add("q1");
    menuPageMenuGridDeserts.append(menuPageMenuGridItemWrapperDeserts);

    // deserts loop
    for (let i = 0; i < menuItems.mains.dishes.length; i++) {
        // menu grid item
        const MenuGridItem = document.createElement("div");
        MenuGridItem.classList.add("menu-item");
        menuPageMenuGridItemWrapperDeserts.append(MenuGridItem);

        // menu grid item title
        const MenuGridItemTitle = document.createElement("div");
        MenuGridItemTitle.classList.add("menu-item-title");
        MenuGridItem.append(MenuGridItemTitle);

        // menu grid item title title
        const MenuGridItemTitleTitle = document.createElement("div");
        MenuGridItemTitleTitle.classList.add("title");
        MenuGridItemTitleTitle.innerHTML = menuItems.deserts.dishes[i].name;
        MenuGridItemTitle.append(MenuGridItemTitleTitle);

        // menu grid item title Price
        const MenuGridItemTitlePrice = document.createElement("div");
        MenuGridItemTitlePrice.classList.add("price");
        MenuGridItemTitlePrice.innerHTML = menuItems.deserts.dishes[i].price;
        MenuGridItemTitle.append(MenuGridItemTitlePrice);

        // menu grid item description
        const MenuGridItemDescription = document.createElement("div");
        MenuGridItemDescription.classList.add("menu-item-description");
        MenuGridItemDescription.innerHTML = menuItems.deserts.dishes[i].description;
        MenuGridItem.append(MenuGridItemDescription);
    };

    // append menu to #content container
    document.querySelector("#content").append(menuPageContainer);
};

export default menu;