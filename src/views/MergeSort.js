import React from "react";

function MergeSort() {
  return (
    <>
      <div className="title">Merge Sort &Theta;(nlogn)</div>
      <hr></hr>
      <div className="para">
        Merge sort is a divide and conquer algorithm that was invented by John
        von Neumann in 1945.
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">Conceptually, a merge sort works as follows: </div>
      <div className="para">
        1. Divide the unsorted list into n sublists, each containing one element
        (a list of one element is considered sorted).
      </div>
      <div className="para">
        2. Repeatedly merge sublists to produce new sorted sublists until there
        is only one sublist remaining. This will be the sorted list.{" "}
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">Pseudo-code:</div>
      <pre>
        {`
        function merge(left, right)
        var result := empty list
    
        while left is not empty and right is not empty do
            if first(left) ≤ first(right) then
                append first(left) to result
                left := rest(left)
            else
                append first(right) to result
                right := rest(right)
    
        // Either left or right may have elements left; consume them.
        // (Only one of the following loops will actually be entered.)
        while left is not empty do
            append first(left) to result
            left := rest(left)
        while right is not empty do
            append first(right) to result
            right := rest(right)
        return result
          `}
      </pre>
      <div className="para">
        For more information, please refer to
        <a href="https://en.wikipedia.org/wiki/Merge_sort"> Wikipedia.</a>
      </div>
      <div className="para">&nbsp;</div>
      <div className="para">&nbsp;</div>
      <div className="cc">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4VqmGXwpLqc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default MergeSort;
