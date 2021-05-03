import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function BubbleSort() {
  return (
    <>
      <div className="title">
        Bubble Sort &Theta;(n<sup>2</sup>)
      </div>
      <hr></hr>
      <div className="para">
        Bubble sort, sometimes referred to as sinking sort, is a simple sorting
        algorithm that repeatedly steps through the list, compares adjacent
        elements and swaps them if they are in the wrong order.
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">
        The pass through the list is repeated until the list is sorted. The
        algorithm, which is a comparison sort, is named for the way smaller or
        larger elements "bubble" to the top of the list.
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">Pseudo-code:</div>
      <pre>
        {`
        procedure bubbleSort(A : list of sortable items)
        n := length(A)
        repeat
            swapped := false
            for i := 1 to n - 1 inclusive do
                if A[i - 1] > A[i] then
                    swap(A[i - 1], A[i])
                    swapped = true
                end if
            end for
            n := n - 1
        until not swapped
        end procedure
          `}
      </pre>
      <div className="para">
        For more information, please refer to
        <a href="https://en.wikipedia.org/wiki/Bubble_sort"> Wikipedia.</a>
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">&nbsp;</div>
      <div className="cc">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/xli_FI7CuzA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default BubbleSort;
