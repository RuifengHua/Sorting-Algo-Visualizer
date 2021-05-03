import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function QuickSort() {
  return (
    <>
      <div className="title">Quick Sort &Theta;(nlogn)&#8612;(Average)</div>
      <hr></hr>
      <div className="para">
        Quicksort is a divide-and-conquer algorithm. It works by selecting a
        'pivot' element from the array and partitioning the other elements into
        two sub-arrays, according to whether they are less than or greater than
        the pivot.
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">
        For this reason, it is sometimes called partition-exchange sort. The
        sub-arrays are then sorted recursively. This can be done in-place,
        requiring small additional amounts of memory to perform the sorting.
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">Pseudo-code:</div>
      <pre>
        {`
        algorithm quicksort(A, lo, hi) is
        if lo < hi then
            p := partition(A, lo, hi)
            quicksort(A, lo, p - 1)
            quicksort(A, p + 1, hi)

        algorithm partition(A, lo, hi) is
        pivot := A[hi]
        i := lo
        for j := lo to hi do
            if A[j] < pivot then
                swap A[i] with A[j]
                i := i + 1
        swap A[i] with A[hi]
        return i
        `}
      </pre>
      <div className="para">
        For more information, please refer to
        <a href="https://en.wikipedia.org/wiki/Quicksort"> Wikipedia.</a>
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">&nbsp;</div>
      <div className="cc">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Hoixgm4-P4M"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default QuickSort;
