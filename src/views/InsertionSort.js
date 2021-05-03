import React from "react";
// react plugin for creating notifications over the dashboard
import NotificationAlert from "react-notification-alert";
// react-bootstrap components
import {
  Alert,
  Badge,
  Button,
  Card,
  Modal,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function InsertionSort() {
  return (
    <>
      <div className="title">
        Insertion Sort &Theta;(n<sup>2</sup>)
      </div>
      <hr></hr>
      <div className="para">
        Insertion sort is a simple sorting algorithm that builds the final
        sorted array (or list) one item at a time. It is much less efficient on
        large lists than more advanced algorithms such as quicksort, heapsort,
        or merge sort.
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">
        Insertion sort iterates, consuming one input element each repetition,
        and grows a sorted output list. At each iteration, insertion sort
        removes one element from the input data, finds the location it belongs
        within the sorted list, and inserts it there. It repeats until no input
        elements remain.
      </div>

      <div className="para">&nbsp;</div>
      <div className="para">Pseudo-code:</div>
      <pre>
        {`
        i ← 1
        while i < length(A)
            j ← i
            while j > 0 and A[j-1] > A[j]
                swap A[j] and A[j-1]
                j ← j - 1
            end while
            i ← i + 1
        end while
    `}
      </pre>
      <div className="para">
        For more information, please refer to
        <a href="https://en.wikipedia.org/wiki/Insertion_sort"> Wikipedia.</a>
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">&nbsp;</div>
      <div className="cc">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/JU767SDMDvA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default InsertionSort;
