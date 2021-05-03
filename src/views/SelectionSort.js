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

function SelectionSort() {
  return (
    <>
      <div className="title">
        Selection Sort &Theta;(n<sup>2</sup>)
      </div>
      <hr></hr>
      <div className="para">
        Selection sort is an in-place comparison sorting algorithm.
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">
        The algorithm divides the input list into two parts: a sorted sublist of
        items which is built up from left to right at the front (left) of the
        list and a sublist of the remaining unsorted items that occupy the rest
        of the list.
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">
        Initially, the sorted sublist is empty and the unsorted sublist is the
        entire input list. The algorithm proceeds by finding the smallest (or
        largest, depending on sorting order) element in the unsorted sublist,
        exchanging (swapping) it with the leftmost unsorted element (putting it
        in sorted order), and moving the sublist boundaries one element to the
        right.
      </div>

      <div className="para">&nbsp;</div>
      <div className="para"> Implementation in C:</div>
      <pre>
        {`
        /* a[0] to a[aLength-1] is the array to sort */
        int i,j;
        int aLength; // initialise to a's length

        /* advance the position through the entire array */
        /*   (could do i < aLength-1 because single element is also min element) */
        for (i = 0; i < aLength-1; i++)
        {
            /* find the min element in the unsorted a[i .. aLength-1] */

            /* assume the min is the first element */
            int jMin = i;
            /* test against elements after i to find the smallest */
            for (j = i+1; j < aLength; j++)
            {
                /* if this element is less, then it is the new minimum */
                if (a[j] < a[jMin])
                {
                    /* found new minimum; remember its index */
                    jMin = j;
                }
            }

            if (jMin != i) 
            {
                swap(a[i], a[jMin]);
            }
        }
      `}
      </pre>
      <div className="para">
        For more information, please refer to
        <a href="https://en.wikipedia.org/wiki/Selection_sort"> Wikipedia.</a>
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">&nbsp;</div>
      <div className="cc">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/g-PGLbMth_g"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default SelectionSort;
