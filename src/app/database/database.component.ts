import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {MatTreeModule} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
   {
    name: 'du-external-lib',
    children: [
      {
        name: 'data-import/',
        children: [
          {name: 'ASTRAZEN_DIPRIVAN_ACCREDO_PAT_DEMO_03162021.txt'},
          {name: 'ASTRAZEN_DIPRIVAN_ACCREDO_PAT_DEMO_03162021.txt'},
        ]
      }, {
        name: 'data-export/',
        children: [
          {name: 'ASTRAZEN_DIPRIVAN_ACCREDO_PAT_DEMO_03162021.txt'},
          {name: 'ASTRAZEN_DIPRIVAN_ACCREDO_PAT_DEMO_03162021.txt'},
        ]
      },
       {
        name: 'pymysql/',
        children: [
          {name: 'ASTRAZEN_DIPRIVAN_ACCREDO_PAT_DEMO_03162021.txt'},
          {name: 'ASTRAZEN_DIPRIVAN_ACCREDO_PAT_DEMO_03162021.txt'},

        ],
      },
    ]
  },
  {
    name: 'filevalidationjsons3',
    children: [
      {
        name: 'Usage/',
        children: [
          {name: 'SensorFeed.csv'},
          {name: 'constituents.csv'},
        ]
      }, {
        name: 'costandusagereport0305/',
        children: [
          {name: '20210301-20210401/'},
          {name: '20210401-20210501/'},
        ]
      },
      
    ]
  },
  
  
];


@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent  {
  readioSelected:any;
  showcontent:any;
  showDiv = {
    previous : false,
    current : false,
    next : false
  }
  showContent(){
    this.showcontent=this.readioSelected;
  }
  
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
