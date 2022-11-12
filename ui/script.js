const progress = document.getElementById('progress');
let maxCount = 0;
let count = 0;
const handleMessage = (e) => {
  const { data } = e;
  switch (data.eventName) {
    case 'startInitFunctionOrder':
      maxCount = data.count;
      break;
    case 'initFunctionInvoking':
        // ((data.idx / maxCount) * 100) + '%'
      progress.style.width = `${(data.idx / maxCount) * 100}%`;
      break;
    case 'startDataFileEntries':
      maxCount = data.count;
      break;
    case 'performMapLoadFunction':
      count++;
      // ((count / maxCount) * 100) + '%'
      progress.style.width = `${(count / maxCount) * 100}%`;
      break;
  }
}

window.addEventListener('message', handleMessage);