/*!

=========================================================
* Light Bootstrap Visualization React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Visualization from "views/Visualization.js";
import MergeSort from "views/MergeSort.js";
import BubbleSort from "views/BubbleSort.js";
import QuickSort from "views/QuickSort.js";
import SelectionSort from "views/SelectionSort.js";
import InsertionSort from "views/InsertionSort.js";
import Credits from "views/Credits.js";

const dashboardRoutes = [
  {
    path: "/visualization",
    name: "Visualization",
    icon: "nc-icon nc-chart-bar-32",
    component: Visualization,
    layout: "/admin",
  },
  {
    path: "/mergeSort",
    name: "Merge Sort",
    icon: "nc-icon nc-paper-2",
    component: MergeSort,
    layout: "/admin",
  },
  {
    path: "/bubbleSort",
    name: "BubbleSort",
    icon: "nc-icon nc-paper-2",
    component: BubbleSort,
    layout: "/admin",
  },
  {
    path: "/quickSort",
    name: "Quick Sort",
    icon: "nc-icon nc-paper-2",
    component: QuickSort,
    layout: "/admin",
  },
  {
    path: "/selectionSort",
    name: "Selection Sort",
    icon: "nc-icon nc-paper-2",
    component: SelectionSort,
    layout: "/admin",
  },

  {
    path: "/insertionSort",
    name: "Insertion Sort",
    icon: "nc-icon nc-paper-2",
    component: InsertionSort,
    layout: "/admin",
  },

  {
    path: "/credits",
    name: "Credits",
    icon: "nc-icon nc-bank",
    component: Credits,
    layout: "/admin",
  },
];

export default dashboardRoutes;
