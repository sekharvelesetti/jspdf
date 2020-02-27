import { Component, OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import  'jspdf-autotable';
import { UserOptions} from 'jspdf-autotable';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

interface  jspdfwithPlugin extends jspdf {
  autotable: (options:UserOptions) => jspdf;
}

@Component({
  selector: 'app-jspdf',
  templateUrl: './jspdf.component.html',
  styleUrls: ['./jspdf.component.css']
})
export class JspdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
submit(){
  const doc =new jspdf ("portrait","px","a4")
  doc.autoTable({
    styles: { fillColor: [255, 0, 0]},
  columnStyles: { 0: { halign: 'center', fillColor: [0,0,0] } }, // Cells in first column centered and green
  margin: { top: 10 },
    head:[["name","age","country"]],
    body:[["sekhar","25","india"],
           ["jamal","26","india"]
          ]
  })

  doc.autoTable({
    styles: { fillColor: [255, 0, 0]},

    head: [["discription"]],
    body:[
      ["this is sekhar and oisuoyhifrgwjfegjgwiegifyeifuiwhfiowueqhfiuewiryirewkjfgwiqgfiegfifugqwifugeiuqgwiuigfwigfiewgfiuewtyruiywiruewyiryweiouryiuwgriwriwg"],
      ["this is sekhar and oisuoyhifrgwjfegjgwiegifyeifuiwhfiowueqhfiuewiryirewkjfgwiqgfiegfifugqwifugeiuqgwiuigfwigfiewgfiuewtyruiywiruewyiryweiouryiuwgriwriwg"]

    ]
  })
  doc.save("sekhar.pdf")
}
}
