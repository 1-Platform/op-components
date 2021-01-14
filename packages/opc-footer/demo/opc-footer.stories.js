import '../dist/opc-footer';

export default {
    title: 'Footer',
    argTypes: {
        color: {
            control: 'color',
        }
    }
}

export const opcFooter = (args) => `
<opc-footer></opc-footer>
<script>
  var links = [
    {
      "category":"Quick Links",
      "links":[
        { "text":"Down For The Count", "href":"https://fb.com" },
        { "text":"Between a Rock and a Hard Place"},
        { "text":"Keep Your Eyes Peeled"},
        { "text":"Drawing a Blank"}
      ]
    },
    {
      "category":"Related Links",
      "links":[
        { "text":"All Greek To Me", "href":"https://fb.com" },
        { "text":"Keep Your Shirt On"},
        { "text":"Go For Broke"},
        { "text":"Head Over Heels"},
        { "text":"Lovey Dovey"},
        { "text":"Raining Cats and Dogs"}
      ]
    },
    {
      "category":"Help",
      "links":[
        { "text":"Back To the Drawing Board", "href":"https://fb.com" },
        { "text":"Go For Broke" },
        { "text":"Right Off the Bat" },
        { "text":"Down And Out" }
      ]
    },
  ];

  var lightFooterWithLinksEL = document.querySelector('opc-footer');
  lightFooterWithLinksEL.opcLinkCategories = links;
</script>
`;
