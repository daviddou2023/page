function moveDot() {
  const dot = document.getElementById('moving-dot');
  const notebook = document.querySelector('.notebook-icon');
  const router = document.querySelector('.router-icon');
  const web = document.querySelector('.web-icon');
  const dns = document.querySelector('.dns-icon');

  // 获取笔记本图标的中心坐标
  const notebookRect = notebook.getBoundingClientRect();
  const notebookX = notebookRect.left + notebookRect.width / 2;
  const notebookY = notebookRect.top + notebookRect.height / 2;

  // 获取路由器图标的中心坐标
  const routerRect = router.getBoundingClientRect();
  const routerX = routerRect.left + routerRect.width / 2;
  const routerY = routerRect.top + routerRect.height / 2;

  // 获取WEB服务器图标的中心坐标
  const webRect = web.getBoundingClientRect();
  const webX = webRect.left + webRect.width / 2;
  const webY = webRect.top + webRect.height / 2;

  // 获取DNS服务器图标的中心坐标
  const dnsRect = dns.getBoundingClientRect();
  const dnsX = dnsRect.left + dnsRect.width / 2;
  const dnsY = dnsRect.top + dnsRect.height / 2;

  // 将红色点的初始位置设定为笔记本的中心
  dot.style.left = `${notebookX - dot.offsetWidth / 2}px`;
  dot.style.top = `${notebookY - dot.offsetHeight / 2}px`;

  // 使用 setTimeout 以确保红色点的初始位置已经设置
  setTimeout(() => {
    dot.style.transform = `translate(${routerX - notebookX}px, ${routerY - notebookY}px)`;

    
  }, 10); // 适当延迟以确保初始位置设置好
}
