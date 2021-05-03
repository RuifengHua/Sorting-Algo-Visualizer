import React from "react";
import "./SortingVisualizer.css";
import {
  getMergeSortAnimations,
  getBubbleSortAnimation,
  getQuickSortAnimation,
  getSelectionSortAnimation,
  getInsertionSortAnimation,
} from "./sortingAlgorithms.js";

import { Button, Row, Col } from "react-bootstrap";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 3;

// This is the main color of the array bars.
const PRIMARY_COLOR = "#a891da";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArrayS();
  }

  resetArrayS(opt) {
    document.getElementById("bb4").disabled = false;
    document.getElementById("bb5").disabled = false;
    document.getElementById("bb6").disabled = false;
    document.getElementById("bb7").disabled = false;
    document.getElementById("bb8").disabled = false;
    if (opt == 1) {
      const arrayBars = document.getElementsByClassName("arraybar2");
      const finish = this.state.array.slice();
      for (let i = 0; i < finish.length; i++) {
        const barOneStyle = arrayBars[i].style;

        barOneStyle.backgroundColor = PRIMARY_COLOR;
      }
    } else if (opt == 2) {
      const arrayBars = document.getElementsByClassName("arraybar1");
      const finish = this.state.array.slice();
      for (let i = 0; i < finish.length; i++) {
        const barOneStyle = arrayBars[i].style;

        barOneStyle.backgroundColor = PRIMARY_COLOR;
      }
    } else {
      const arrayBars = document.getElementsByClassName("arraybar");
      const finish = this.state.array.slice();
      for (let i = 0; i < finish.length; i++) {
        const barOneStyle = arrayBars[i].style;

        barOneStyle.backgroundColor = PRIMARY_COLOR;
      }
    }

    const array = [];
    for (let i = 0; i < 26; i++) {
      if (i == 25) array.push(600);
      else array.push(randomIntFromInterval(5, 600));
    }
    this.setState({ array });
  }

  resetArrayM(opt) {
    document.getElementById("bb4").disabled = false;
    document.getElementById("bb5").disabled = false;
    document.getElementById("bb6").disabled = false;
    document.getElementById("bb7").disabled = false;
    document.getElementById("bb8").disabled = false;
    if (opt == 1) {
      const arrayBars = document.getElementsByClassName("arraybar2");
      const finish = this.state.array.slice();
      for (let i = 0; i < finish.length; i++) {
        const barOneStyle = arrayBars[i].style;

        barOneStyle.backgroundColor = PRIMARY_COLOR;
      }
    } else if (opt == 2) {
      const arrayBars = document.getElementsByClassName("arraybar1");
      const finish = this.state.array.slice();
      for (let i = 0; i < finish.length; i++) {
        const barOneStyle = arrayBars[i].style;

        barOneStyle.backgroundColor = PRIMARY_COLOR;
      }
    } else {
      const arrayBars = document.getElementsByClassName("arraybar");
      const finish = this.state.array.slice();
      for (let i = 0; i < finish.length; i++) {
        const barOneStyle = arrayBars[i].style;

        barOneStyle.backgroundColor = PRIMARY_COLOR;
      }
    }
    const array = [];
    for (let i = 0; i < 90; i++) {
      if (i == 89) array.push(600);
      else array.push(randomIntFromInterval(5, 600));
    }
    this.setState({ array });
  }

  resetArrayL(opt) {
    document.getElementById("bb4").disabled = false;
    document.getElementById("bb5").disabled = false;
    document.getElementById("bb6").disabled = false;
    document.getElementById("bb7").disabled = false;
    document.getElementById("bb8").disabled = false;
    if (opt == 1) {
      const arrayBars = document.getElementsByClassName("arraybar2");
      const finish = this.state.array.slice();
      for (let i = 0; i < finish.length; i++) {
        const barOneStyle = arrayBars[i].style;

        barOneStyle.backgroundColor = PRIMARY_COLOR;
      }
    } else if (opt == 2) {
      const arrayBars = document.getElementsByClassName("arraybar1");
      const finish = this.state.array.slice();
      for (let i = 0; i < finish.length; i++) {
        const barOneStyle = arrayBars[i].style;

        barOneStyle.backgroundColor = PRIMARY_COLOR;
      }
    } else {
      const arrayBars = document.getElementsByClassName("arraybar");
      const finish = this.state.array.slice();
      for (let i = 0; i < finish.length; i++) {
        const barOneStyle = arrayBars[i].style;

        barOneStyle.backgroundColor = PRIMARY_COLOR;
      }
    }
    const array = [];
    for (let i = 0; i < 220; i++) {
      if (i == 119) array.push(600);
      else array.push(randomIntFromInterval(5, 600));
    }
    this.setState({ array });
  }

  insertionSort(opt) {
    document.getElementById("bb1").disabled = "disabled";
    document.getElementById("bb2").disabled = "disabled";
    document.getElementById("bb3").disabled = "disabled";
    document.getElementById("bb4").disabled = "disabled";
    document.getElementById("bb5").disabled = "disabled";
    document.getElementById("bb6").disabled = "disabled";
    document.getElementById("bb7").disabled = "disabled";
    document.getElementById("bb8").disabled = "disabled";
    try {
      const animations = getInsertionSortAnimation(this.state.array);
      if (opt == 1) {
        const arrayBars = document.getElementsByClassName("arraybar2");
        for (let i = 0; i < animations.length; i++) {
          const [opt, value] = animations[i];
          if (opt == 1 || opt == 2) {
            const [barOneIdx, barTwoIdx] = value;

            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = opt == 1 ? SECONDARY_COLOR : "#039003";
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 10);
          } else if (opt == 3) {
            const [barOneIdx, newHeight] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
              barOneStyle.height = `${newHeight}px`;
            }, i * 10);
          } else {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "#039003";
            }, i * 10);
          }

          if (i == animations.length - 1) {
            setTimeout(() => {
              try {
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                return;
              }
            }, (i + 1) * 10);
          }
        }
      } else if (opt == 2) {
        const arrayBars = document.getElementsByClassName("arraybar1");
        for (let i = 0; i < animations.length; i++) {
          const [opt, value] = animations[i];
          if (opt == 1 || opt == 2) {
            const [barOneIdx, barTwoIdx] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = opt == 1 ? SECONDARY_COLOR : "#039003";

            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 1);
          } else if (opt == 3) {
            const [barOneIdx, newHeight] = value;
            const barOneStyle = arrayBars[barOneIdx].style;

            setTimeout(() => {
              barOneStyle.height = `${newHeight}px`;
            }, i * 1);
          } else {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "#039003";
            }, i * 1);
          }

          if (i == animations.length - 1) {
            setTimeout(() => {
              try {
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                return;
              }
            }, (i + 1) * 1);
          }
        }
      } else {
        const arrayBars = document.getElementsByClassName("arraybar");
        for (let i = 0; i < animations.length; i++) {
          const [opt, value] = animations[i];
          if (opt == 1 || opt == 2) {
            const [barOneIdx, barTwoIdx] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = opt == 1 ? SECONDARY_COLOR : "#039003";
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 0.3);
          } else if (opt == 3) {
            const [barOneIdx, newHeight] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
              barOneStyle.height = `${newHeight}px`;
            }, i * 0.3);
          } else {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "#039003";
            }, i * 0.3);
          }

          if (i == animations.length - 1) {
            setTimeout(() => {
              try {
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                return;
              }
            }, (i + 1) * 0.3);
          }
        }
      }
    } catch (e) {
      return;
    }
  }

  clearqueue(id) {
    while (id--) {
      clearTimeout(id);
    }
  }
  quickSort() {
    document.getElementById("bb1").disabled = "disabled";
    document.getElementById("bb2").disabled = "disabled";
    document.getElementById("bb3").disabled = "disabled";
    document.getElementById("bb4").disabled = "disabled";
    document.getElementById("bb5").disabled = "disabled";
    document.getElementById("bb6").disabled = "disabled";
    document.getElementById("bb7").disabled = "disabled";
    document.getElementById("bb8").disabled = "disabled";
    const animation = [];
    const animations = getQuickSortAnimation(
      this.state.array,
      0,
      this.state.array.length - 1,
      animation
    );
    try {
      if (this.state.array.length == 26) {
        let id;
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName("arraybar2");

          const [opt, idx] = animations[i];
          if (opt == -1 || opt == -2) {
            const [barOneIdx, barTwoIdx] = idx;
            const barOneStyle = arrayBars[barOneIdx].style;
            const color = opt == -1 ? SECONDARY_COLOR : PRIMARY_COLOR;
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                barOneStyle.backgroundColor = color;
              } catch (e) {
                this.clearqueue(id);
              }
            }, i * 10);
          } else if (opt == -3) {
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                const [barOneIdx, newHeight] = idx;
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              } catch (e) {
                this.clearqueue(id);
              }
              if (i == animations.length - 1) {
                const finish = this.state.array.slice();
                for (let i = 0; i < finish.length; i++) {
                  try {
                    const barOneStyle = arrayBars[i].style;
                    id = setTimeout(() => {
                      try {
                        document.getElementById("bb1").disabled;
                      } catch (e) {
                        this.clearqueue(id);
                      }
                      barOneStyle.backgroundColor = "#039003";
                    }, i * 10);
                  } catch (e) {
                    this.clearqueue(id);
                  }
                }
              }
            }, i * 10);
          } else if (opt == -4) {
            const [barOneIdx, barTwoIdx] = idx;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
              } catch (e) {
                this.clearqueue(id);
              }
              barTwoStyle.backgroundColor = "black";
            }, i * 10);
          } else {
            const [barOneIdx, barTwoIdx] = idx;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
              } catch (e) {
                this.clearqueue(id);
              }
              barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i * 10);
          }

          if (i == animations.length - 1) {
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                this.clearqueue(id);
              }
            }, (i + 1) * 10);
          }
        }
      } else if (this.state.array.length == 90) {
        let id;
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName("arraybar1");

          const [opt, idx] = animations[i];
          if (opt == -1 || opt == -2) {
            const [barOneIdx, barTwoIdx] = idx;
            const barOneStyle = arrayBars[barOneIdx].style;
            const color = opt == -1 ? SECONDARY_COLOR : PRIMARY_COLOR;
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                barOneStyle.backgroundColor = color;
              } catch (e) {
                this.clearqueue(id);
              }
            }, i * 3);
          } else if (opt == -3) {
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                const [barOneIdx, newHeight] = idx;
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              } catch (e) {
                this.clearqueue(id);
              }
              if (i == animations.length - 1) {
                const finish = this.state.array.slice();
                for (let i = 0; i < finish.length; i++) {
                  try {
                    const barOneStyle = arrayBars[i].style;
                    id = setTimeout(() => {
                      try {
                        document.getElementById("bb1").disabled;
                      } catch (e) {
                        this.clearqueue(id);
                      }
                      barOneStyle.backgroundColor = "#039003";
                    }, i * 3);
                  } catch (e) {
                    this.clearqueue(id);
                  }
                }
              }
            }, i * 3);
          } else if (opt == -4) {
            const [barOneIdx, barTwoIdx] = idx;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
              } catch (e) {
                this.clearqueue(id);
              }
              barTwoStyle.backgroundColor = "black";
            }, i * 3);
          } else {
            const [barOneIdx, barTwoIdx] = idx;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
              } catch (e) {
                this.clearqueue(id);
              }
              barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i * 3);
          }

          if (i == animations.length - 1) {
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                this.clearqueue(id);
              }
            }, (i + 1) * 3);
          }
        }
      } else {
        let id;
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName("arraybar");

          const [opt, idx] = animations[i];
          if (opt == -1 || opt == -2) {
            const [barOneIdx, barTwoIdx] = idx;
            const barOneStyle = arrayBars[barOneIdx].style;
            const color = opt == -1 ? SECONDARY_COLOR : PRIMARY_COLOR;
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                barOneStyle.backgroundColor = color;
              } catch (e) {
                this.clearqueue(id);
              }
            }, i * 1);
          } else if (opt == -3) {
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                const [barOneIdx, newHeight] = idx;
                const barOneStyle = arrayBars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
              } catch (e) {
                this.clearqueue(id);
              }
              if (i == animations.length - 1) {
                const finish = this.state.array.slice();
                for (let i = 0; i < finish.length; i++) {
                  try {
                    const barOneStyle = arrayBars[i].style;
                    id = setTimeout(() => {
                      try {
                        document.getElementById("bb1").disabled;
                      } catch (e) {
                        this.clearqueue(id);
                      }
                      barOneStyle.backgroundColor = "#039003";
                    }, i * 1);
                  } catch (e) {
                    this.clearqueue(id);
                  }
                }
              }
            }, i * 1);
          } else if (opt == -4) {
            const [barOneIdx, barTwoIdx] = idx;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                barTwoStyle.backgroundColor = "black";
              } catch (e) {
                this.clearqueue(id);
              }
            }, i * 1);
          } else {
            const [barOneIdx, barTwoIdx] = idx;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                barTwoStyle.backgroundColor = PRIMARY_COLOR;
              } catch (e) {
                this.clearqueue(id);
              }
            }, i * 1);
          }

          if (i == animations.length - 1) {
            id = setTimeout(() => {
              try {
                document.getElementById("bb1").disabled;
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                this.clearqueue(id);
              }
            }, (i + 1) * 1);
          }
        }
      }
    } catch (e) {
      return;
    }
  }

  bubbleSort(opt) {
    document.getElementById("bb1").disabled = "disabled";
    document.getElementById("bb2").disabled = "disabled";
    document.getElementById("bb3").disabled = "disabled";
    document.getElementById("bb4").disabled = "disabled";
    document.getElementById("bb5").disabled = "disabled";
    document.getElementById("bb6").disabled = "disabled";
    document.getElementById("bb7").disabled = "disabled";
    document.getElementById("bb8").disabled = "disabled";
    const animations = getBubbleSortAnimation(this.state.array);
    try {
      if (opt == 1) {
        const arrayBars = document.getElementsByClassName("arraybar2");
        for (let i = 0; i < animations.length; i++) {
          const [op, value] = animations[i];

          if (op == 1 || op == 2) {
            const [barOneIdx, barTwoIdx] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = op == 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 5);
          } else if (op == 3) {
            const [barOneIdx, newHeight] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
              barOneStyle.height = `${newHeight}px`;
            }, i * 5);
          } else {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "#039003";
            }, i * 5);
          }

          if (i == animations.length - 1) {
            setTimeout(() => {
              try {
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                return;
              }
            }, (i + 1) * 5);
          }
        }
      } else if (opt == 2) {
        const arrayBars = document.getElementsByClassName("arraybar1");
        for (let i = 0; i < animations.length; i++) {
          const [op, value] = animations[i];

          if (op == 1 || op == 2) {
            const [barOneIdx, barTwoIdx] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = op == 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 0.5);
          } else if (op == 3) {
            const [barOneIdx, newHeight] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
              barOneStyle.height = `${newHeight}px`;
            }, i * 0.5);
          } else {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "#039003";
            }, i * 0.5);
          }

          if (i == animations.length - 1) {
            setTimeout(() => {
              try {
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                return;
              }
            }, (i + 1) * 0.5);
          }
        }
      } else {
        const arrayBars = document.getElementsByClassName("arraybar");
        for (let i = 0; i < animations.length; i++) {
          const [op, value] = animations[i];

          if (op == 1 || op == 2) {
            const [barOneIdx, barTwoIdx] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = op == 1 ? SECONDARY_COLOR : PRIMARY_COLOR;
            setTimeout(() => {
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            }, i * 0.1);
          } else if (op == 3) {
            const [barOneIdx, newHeight] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
              barOneStyle.height = `${newHeight}px`;
            }, i * 0.1);
          } else {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "#039003";
            }, i * 0.1);
          }

          if (i == animations.length - 1) {
            setTimeout(() => {
              try {
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                return;
              }
            }, (i + 1) * 0.1);
          }
        }
      }
    } catch (e) {
      return;
    }
  }

  selectionSort(size) {
    document.getElementById("bb1").disabled = "disabled";
    document.getElementById("bb2").disabled = "disabled";
    document.getElementById("bb3").disabled = "disabled";
    document.getElementById("bb4").disabled = "disabled";
    document.getElementById("bb5").disabled = "disabled";
    document.getElementById("bb6").disabled = "disabled";
    document.getElementById("bb7").disabled = "disabled";
    document.getElementById("bb8").disabled = "disabled";
    try {
      const animations = getSelectionSortAnimation(this.state.array);
      if (size == 1) {
        const arrayBars = document.getElementsByClassName("arraybar2");
        const speed = 7;
        for (let i = 0; i < animations.length; i++) {
          const [opt, value] = animations[i];

          if (opt == 1) {
            const [barOneIdx, barTwoIdx] = value;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
              barTwoStyle.backgroundColor = SECONDARY_COLOR;
            }, i * speed);
          } else if (opt == 2) {
            const [barOneIdx, barTwoIdx] = value;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
              barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i * speed);
          } else if (opt == 3) {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = PRIMARY_COLOR;
            }, i * speed);
          } else if (opt == 4) {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "black";
            }, i * speed);
          } else if (opt == 5) {
            const [barOneIdx, newHeight] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
              barOneStyle.height = `${newHeight}px`;
            }, i * speed);
          } else {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "#039003";
            }, i * speed);
          }
          if (i == animations.length - 1) {
            setTimeout(() => {
              try {
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                return;
              }
            }, (i + 1) * speed);
          }
        }
      } else if (size == 2) {
        const arrayBars = document.getElementsByClassName("arraybar1");
        const speed = 1;
        for (let i = 0; i < animations.length; i++) {
          const [opt, value] = animations[i];
          if (opt == 1) {
            const [barOneIdx, barTwoIdx] = value;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
              barTwoStyle.backgroundColor = SECONDARY_COLOR;
            }, i * speed);
          } else if (opt == 2) {
            const [barOneIdx, barTwoIdx] = value;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
              barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i * speed);
          } else if (opt == 3) {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = PRIMARY_COLOR;
            }, i * speed);
          } else if (opt == 4) {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "black";
            }, i * speed);
          } else if (opt == 5) {
            const [barOneIdx, newHeight] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
              barOneStyle.height = `${newHeight}px`;
            }, i * speed);
          } else {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "#039003";
            }, i * speed);
          }

          if (i == animations.length - 1) {
            setTimeout(() => {
              try {
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                return;
              }
            }, (i + 1) * speed);
          }
        }
      } else {
        const arrayBars = document.getElementsByClassName("arraybar");
        const speed = 0.1;
        for (let i = 0; i < animations.length; i++) {
          const [opt, value] = animations[i];
          if (opt == 1) {
            const [barOneIdx, barTwoIdx] = value;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
              barTwoStyle.backgroundColor = SECONDARY_COLOR;
            }, i * speed);
          } else if (opt == 2) {
            const [barOneIdx, barTwoIdx] = value;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            setTimeout(() => {
              barTwoStyle.backgroundColor = PRIMARY_COLOR;
            }, i * speed);
          } else if (opt == 3) {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = PRIMARY_COLOR;
            }, i * speed);
          } else if (opt == 4) {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "black";
            }, i * speed);
          } else if (opt == 5) {
            const [barOneIdx, newHeight] = value;
            const barOneStyle = arrayBars[barOneIdx].style;
            setTimeout(() => {
              barOneStyle.height = `${newHeight}px`;
            }, i * speed);
          } else {
            const barOneStyle = arrayBars[value].style;
            setTimeout(() => {
              barOneStyle.backgroundColor = "#039003";
            }, i * speed);
          }

          if (i == animations.length - 1) {
            setTimeout(() => {
              try {
                document.getElementById("bb1").disabled = false;
                document.getElementById("bb2").disabled = false;
                document.getElementById("bb3").disabled = false;
              } catch (e) {
                return;
              }
            }, (i + 1) * speed);
          }
        }
      }
    } catch (e) {
      return;
    }
  }

  mergeSort(opt) {
    document.getElementById("bb1").disabled = "disabled";
    document.getElementById("bb2").disabled = "disabled";
    document.getElementById("bb3").disabled = "disabled";
    document.getElementById("bb4").disabled = "disabled";
    document.getElementById("bb5").disabled = "disabled";
    document.getElementById("bb6").disabled = "disabled";
    document.getElementById("bb7").disabled = "disabled";
    document.getElementById("bb8").disabled = "disabled";
    const animations = getMergeSortAnimations(this.state.array);

    if (opt == 1) {
      let id;
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("arraybar2");
        const isColorChange = i % 3 != 2;
        if (isColorChange) {
          id = setTimeout(() => {
            try {
              document.getElementById("bb1").disabled;
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            } catch (e) {
              this.clearqueue(id);
            }
          }, i * 20);
        } else {
          id = setTimeout(() => {
            try {
              document.getElementById("bb1").disabled;
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            } catch (e) {
              this.clearqueue(id);
            }
            if (i == animations.length - 1) {
              const finish = this.state.array.slice();
              for (let i = 0; i < finish.length; i++) {
                const barOneStyle = arrayBars[i].style;

                id = setTimeout(() => {
                  try {
                    document.getElementById("bb1").disabled;
                    barOneStyle.backgroundColor = "#039003";
                  } catch (e) {
                    this.clearqueue(id);
                  }
                }, i * 20);
              }
            }
          }, i * 20);
        }

        if (i == animations.length - 1) {
          id = setTimeout(() => {
            try {
              document.getElementById("bb1").disabled = false;
              document.getElementById("bb2").disabled = false;
              document.getElementById("bb3").disabled = false;
            } catch (e) {
              this.clearqueue(id);
            }
          }, (i + 1) * 20);
        }
      }
    } else if (opt == 2) {
      let id;
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("arraybar1");
        const isColorChange = i % 3 != 2;
        if (isColorChange) {
          id = setTimeout(() => {
            try {
              document.getElementById("bb1").disabled;
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            } catch (e) {
              this.clearqueue(id);
            }
          }, i * 3);
        } else {
          id = setTimeout(() => {
            try {
              document.getElementById("bb1").disabled;
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            } catch (e) {
              this.clearqueue(id);
            }
            if (i == animations.length - 1) {
              const finish = this.state.array.slice();
              for (let i = 0; i < finish.length; i++) {
                const barOneStyle = arrayBars[i].style;

                id = setTimeout(() => {
                  try {
                    document.getElementById("bb1").disabled;
                    barOneStyle.backgroundColor = "#039003";
                  } catch (e) {
                    this.clearqueue(id);
                  }
                }, i * 3);
              }
            }
          }, i * 3);
        }

        if (i == animations.length - 1) {
          id = setTimeout(() => {
            try {
              document.getElementById("bb1").disabled = false;
              document.getElementById("bb2").disabled = false;
              document.getElementById("bb3").disabled = false;
            } catch (e) {
              this.clearqueue(id);
            }
          }, (i + 1) * 3);
        }
      }
    } else {
      let id;
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName("arraybar");
        const isColorChange = i % 3 != 2;
        if (isColorChange) {
          id = setTimeout(() => {
            try {
              document.getElementById("bb1").disabled;
              const [barOneIdx, barTwoIdx] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
              barOneStyle.backgroundColor = color;
              barTwoStyle.backgroundColor = color;
            } catch (e) {
              this.clearqueue(id);
            }
          }, i * 2);
        } else {
          id = setTimeout(() => {
            try {
              document.getElementById("bb1").disabled;
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            } catch (e) {
              this.clearqueue(id);
            }
            if (i == animations.length - 1) {
              const finish = this.state.array.slice();
              for (let i = 0; i < finish.length; i++) {
                const barOneStyle = arrayBars[i].style;

                id = setTimeout(() => {
                  try {
                    document.getElementById("bb1").disabled;
                    barOneStyle.backgroundColor = "#039003";
                  } catch (e) {
                    this.clearqueue(id);
                  }
                }, i * 2);
              }
            }
          }, i * 2);
        }

        if (i == animations.length - 1) {
          id = setTimeout(() => {
            try {
              document.getElementById("bb1").disabled = false;
              document.getElementById("bb2").disabled = false;
              document.getElementById("bb3").disabled = false;
            } catch (e) {
              this.clearqueue(id);
            }
          }, (i + 1) * 2);
        }
      }
    }
  }

  render() {
    const { array } = this.state;

    if (array.length == 26) {
      return (
        <div className="containerOuter">
          <Row className="justify-content-center">
            <Col lg="3" md="3">
              <Button block id="bb1" onClick={() => this.resetArrayS(1)}>
                Generate a New Small-Sized Array
              </Button>
            </Col>
            <Col lg="3" md="3">
              <Button block id="bb2" onClick={() => this.resetArrayM(1)}>
                Generate a New Median-Sized Array
              </Button>
            </Col>
            <Col lg="3" md="3">
              <Button block id="bb3" onClick={() => this.resetArrayL(1)}>
                Generate a New Large-Sized Array
              </Button>
            </Col>
          </Row>
          <hr></hr>
          <div className="containerUpper1">
            <button
              className="btn"
              id="bb4"
              style={{ width: "250px" }}
              onClick={() => this.mergeSort(1)}
            >
              Merge Sort
            </button>
            <button
              className="btn"
              id="bb5"
              style={{ width: "250px" }}
              onClick={() => this.bubbleSort(1)}
            >
              BubbleSort
            </button>
            <button
              className="btn"
              id="bb6"
              style={{ width: "250px" }}
              onClick={() => this.quickSort()}
            >
              Quick Sort
            </button>
            <button
              className="btn"
              id="bb7"
              style={{ width: "250px" }}
              onClick={() => this.selectionSort(1)}
            >
              Selection Sort
            </button>
            <button
              className="btn"
              id="bb8"
              style={{ width: "250px" }}
              onClick={() => this.insertionSort(1)}
            >
              Insertion Sort
            </button>
          </div>

          <hr></hr>
          <div className="container">
            {array.map((value, idx) => (
              <div
                className="arraybar2"
                key={idx}
                style={{ height: `${value}px` }}
              ></div>
            ))}
          </div>
          <div className="container2">
            <div className="redC">
              <span className="b"></span>
              <div className="red">&nbsp;&nbsp; Currently Comparing</div>
            </div>
            <div className="greenC">
              <span className="a"></span>
              <div className="green">&nbsp;&nbsp; Sorted</div>
            </div>
            <div className="blackC">
              <span className="c"></span>
              <div className="black">&nbsp;&nbsp; Pivot/Current Min</div>
            </div>
          </div>
        </div>
      );
    } else if (array.length == 90) {
      return (
        <div className="containerOuter">
          <Row className="justify-content-center">
            <Col lg="3" md="3">
              <Button block id="bb1" onClick={() => this.resetArrayS(2)}>
                Generate a New Small-Sized Array
              </Button>
            </Col>
            <Col lg="3" md="3">
              <Button block id="bb2" onClick={() => this.resetArrayM(2)}>
                Generate a New Median-Sized Array
              </Button>
            </Col>
            <Col lg="3" md="3">
              <Button block id="bb3" onClick={() => this.resetArrayL(2)}>
                Generate a New Large-Sized Array
              </Button>
            </Col>
          </Row>
          <hr></hr>
          <div className="containerUpper1">
            <button
              className="btn"
              id="bb4"
              style={{ width: "250px" }}
              onClick={() => this.mergeSort(2)}
            >
              Merge Sort
            </button>
            <button
              className="btn"
              id="bb5"
              style={{ width: "250px" }}
              onClick={() => this.bubbleSort(2)}
            >
              BubbleSort
            </button>
            <button
              className="btn"
              id="bb6"
              style={{ width: "250px" }}
              onClick={() => this.quickSort()}
            >
              Quick Sort
            </button>
            <button
              className="btn"
              id="bb7"
              style={{ width: "250px" }}
              onClick={() => this.selectionSort(2)}
            >
              Selection Sort
            </button>
            <button
              className="btn"
              id="bb8"
              style={{ width: "250px" }}
              onClick={() => this.insertionSort(2)}
            >
              Insertion Sort
            </button>
          </div>

          <hr></hr>
          <div className="container">
            {array.map((value, idx) => (
              <div
                className="arraybar1"
                key={idx}
                style={{ height: `${value}px` }}
              ></div>
            ))}
          </div>
          <div className="container2">
            <div className="redC">
              <span className="b"></span>
              <div className="red">&nbsp;&nbsp; Currently Comparing</div>
            </div>
            <div className="greenC">
              <span className="a"></span>
              <div className="green">&nbsp;&nbsp; Sorted</div>
            </div>
            <div className="blackC">
              <span className="c"></span>
              <div className="black">&nbsp;&nbsp; Pivot/Current Min</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="containerOuter">
          <Row className="justify-content-center">
            <Col lg="3" md="3">
              <Button block id="bb1" onClick={() => this.resetArrayS(3)}>
                Generate a New Small-Sized Array
              </Button>
            </Col>
            <Col lg="3" md="3">
              <Button block id="bb2" onClick={() => this.resetArrayM(3)}>
                Generate a New Median-Sized Array
              </Button>
            </Col>
            <Col lg="3" md="3">
              <Button block id="bb3" onClick={() => this.resetArrayL(3)}>
                Generate a New Large-Sized Array
              </Button>
            </Col>
          </Row>
          <hr></hr>
          <div className="containerUpper1">
            <button
              className="btn"
              id="bb4"
              style={{ width: "250px" }}
              onClick={() => this.mergeSort(3)}
            >
              Merge Sort
            </button>
            <button
              className="btn"
              id="bb5"
              style={{ width: "250px" }}
              onClick={() => this.bubbleSort(3)}
            >
              BubbleSort
            </button>
            <button
              className="btn"
              id="bb6"
              style={{ width: "250px" }}
              onClick={() => this.quickSort()}
            >
              Quick Sort
            </button>
            <button
              className="btn"
              id="bb7"
              style={{ width: "250px" }}
              onClick={() => this.selectionSort(3)}
            >
              Selection Sort
            </button>
            <button
              className="btn"
              id="bb8"
              style={{ width: "250px" }}
              onClick={() => this.insertionSort(3)}
            >
              Insertion Sort
            </button>
          </div>

          <hr></hr>
          <div className="container">
            {array.map((value, idx) => (
              <div
                className="arraybar"
                key={idx}
                style={{ height: `${value}px` }}
              ></div>
            ))}
          </div>
          <div className="container2">
            <div className="redC">
              <span className="b"></span>
              <div className="red">&nbsp;&nbsp; Currently Comparing</div>
            </div>
            <div className="greenC">
              <span className="a"></span>
              <div className="green">&nbsp;&nbsp; Sorted</div>
            </div>
            <div className="blackC">
              <span className="c"></span>
              <div className="black">&nbsp;&nbsp; Pivot/Current Min</div>
            </div>
          </div>
        </div>
      );
    }
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
