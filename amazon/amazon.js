fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("section"); // parent div
    container.innerHTML = ""; // clear old content

    data.products.forEach(product => {
      // create box
      const box = document.createElement("div");
      box.className = "box";

      // image container
      const imgContainer = document.createElement("div");
      imgContainer.className = "boximg-container";

      const img = document.createElement("img");
      img.className = "boximg";
      img.src = product.thumbnail;
      img.alt = product.title;
      imgContainer.appendChild(img);

      const descr = document.createElement("div");
      descr.className = "boxdescr";

      const title = document.createElement("div");
      title.className = "boxtitle";
      title.textContent = product.title;

      const descText = document.createElement("div");
      descText.textContent = product.description;

      descr.appendChild(title);
      descr.appendChild(descText);

      box.appendChild(imgContainer);
      box.appendChild(descr);

      container.appendChild(box);
    });
  })
  .catch(err => console.error("Error fetching products:", err));
