const hl = "bg-yellow-200/70 dark:bg-yellow-900/40";

const ResultsSection = () => {
  return (
    <section id="results" className="py-6 px-2 bg-gradient-to-b from-card/30 to-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">Results</h2>

        <div className="overflow-x-auto rounded-lg border border-border shadow-md">
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="px-3 py-2 text-left font-semibold"></th>
                <th className="px-2 py-2 text-center font-semibold" colSpan={3}>Answer Mention</th>
                <th className="px-2 py-2 text-center font-semibold" colSpan={3}>Explicit</th>
                <th className="px-2 py-2 text-center font-semibold" colSpan={3}>Implicit</th>
                <th className="px-2 py-2 text-center font-semibold" colSpan={3}>Visual Question</th>
              </tr>
              <tr className="bg-primary/90 text-primary-foreground">
                <th className="px-3 py-2 text-left font-medium">Model</th>
                <th className="px-2 py-2 text-center font-medium">EM</th>
                <th className="px-2 py-2 text-center font-medium">SS</th>
                <th className="px-2 py-2 text-center font-medium">F1</th>
                <th className="px-2 py-2 text-center font-medium">EM</th>
                <th className="px-2 py-2 text-center font-medium">SS</th>
                <th className="px-2 py-2 text-center font-medium">F1</th>
                <th className="px-2 py-2 text-center font-medium">EM</th>
                <th className="px-2 py-2 text-center font-medium">SS</th>
                <th className="px-2 py-2 text-center font-medium">F1</th>
                <th className="px-2 py-2 text-center font-medium">EM</th>
                <th className="px-2 py-2 text-center font-medium">SS</th>
                <th className="px-2 py-2 text-center font-medium">F1</th>
              </tr>
              <tr className="bg-muted/60">
                <th className="px-3 py-2 text-left font-semibold" colSpan={13}>Missing Image Baseline</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border/60">
                <td className="px-3 py-2">Gemini 1.5 Flash</td><td className="px-2 py-2 text-center">26.59</td><td className="px-2 py-2 text-center">27.39</td><td className="px-2 py-2 text-center">0.128</td><td className="px-2 py-2 text-center">19.52</td><td className="px-2 py-2 text-center">20.92</td><td className="px-2 py-2 text-center">0.085</td><td className="px-2 py-2 text-center">15.32</td><td className="px-2 py-2 text-center">15.29</td><td className="px-2 py-2 text-center">0.063</td><td className="px-2 py-2 text-center">12.91</td><td className="px-2 py-2 text-center">13.84</td><td className="px-2 py-2 text-center">0.054</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Gemini 2.0 Flash</td><td className="px-2 py-2 text-center">27.98</td><td className="px-2 py-2 text-center">30.15</td><td className="px-2 py-2 text-center">0.089</td><td className="px-2 py-2 text-center">19.31</td><td className="px-2 py-2 text-center">21.03</td><td className="px-2 py-2 text-center">0.075</td><td className="px-2 py-2 text-center">14.12</td><td className="px-2 py-2 text-center">14.77</td><td className="px-2 py-2 text-center">0.052</td><td className="px-2 py-2 text-center">17.60</td><td className="px-2 py-2 text-center">18.51</td><td className="px-2 py-2 text-center">0.064</td>
              </tr>
              <tr>
                <td className="px-3 py-2">GPT-4o Mini</td><td className="px-2 py-2 text-center">38.99</td><td className="px-2 py-2 text-center">38.40</td><td className="px-2 py-2 text-center">0.294</td><td className="px-2 py-2 text-center">33.97</td><td className="px-2 py-2 text-center">36.24</td><td className="px-2 py-2 text-center">0.251</td><td className="px-2 py-2 text-center">24.14</td><td className="px-2 py-2 text-center">25.71</td><td className="px-2 py-2 text-center">0.143</td><td className="px-2 py-2 text-center">27.00</td><td className="px-2 py-2 text-center">27.33</td><td className="px-2 py-2 text-center">0.163</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Llama 3-8B</td><td className="px-2 py-2 text-center">32.50</td><td className="px-2 py-2 text-center">32.27</td><td className="px-2 py-2 text-center">0.219</td><td className="px-2 py-2 text-center">29.39</td><td className="px-2 py-2 text-center">28.69</td><td className="px-2 py-2 text-center">0.194</td><td className="px-2 py-2 text-center">22.91</td><td className="px-2 py-2 text-center">23.09</td><td className="px-2 py-2 text-center">0.129</td><td className="px-2 py-2 text-center">20.74</td><td className="px-2 py-2 text-center">20.84</td><td className="px-2 py-2 text-center">0.133</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Mixtral</td><td className={`px-2 py-2 text-center ${hl}`}>42.84</td><td className={`px-2 py-2 text-center ${hl}`}>46.31</td><td className={`px-2 py-2 text-center ${hl}`}>0.321</td><td className={`px-2 py-2 text-center ${hl}`}>36.21</td><td className={`px-2 py-2 text-center ${hl}`}>40.70</td><td className={`px-2 py-2 text-center ${hl}`}>0.282</td><td className={`px-2 py-2 text-center ${hl}`}>28.56</td><td className={`px-2 py-2 text-center ${hl}`}>33.46</td><td className={`px-2 py-2 text-center ${hl}`}>0.202</td><td className={`px-2 py-2 text-center ${hl}`}>30.29</td><td className={`px-2 py-2 text-center ${hl}`}>34.48</td><td className={`px-2 py-2 text-center ${hl}`}>0.241</td>
              </tr>

              <tr className="bg-muted/60 border-t border-border/60">
                <td className="px-3 py-2 font-semibold" colSpan={13}>Entity Replaced Baseline</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Gemini 1.5 Flash</td><td className="px-2 py-2 text-center">59.89</td><td className="px-2 py-2 text-center">67.20</td><td className="px-2 py-2 text-center">0.394</td><td className="px-2 py-2 text-center">54.71</td><td className="px-2 py-2 text-center">54.61</td><td className="px-2 py-2 text-center">0.295</td><td className="px-2 py-2 text-center">43.73</td><td className="px-2 py-2 text-center">47.16</td><td className="px-2 py-2 text-center">0.238</td><td className="px-2 py-2 text-center">-</td><td className="px-2 py-2 text-center">-</td><td className="px-2 py-2 text-center">-</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Gemini 2.0 Flash</td><td className="px-2 py-2 text-center">59.50</td><td className="px-2 py-2 text-center">62.46</td><td className="px-2 py-2 text-center">0.293</td><td className="px-2 py-2 text-center">59.93</td><td className="px-2 py-2 text-center">60.04</td><td className="px-2 py-2 text-center">0.300</td><td className="px-2 py-2 text-center">39.71</td><td className="px-2 py-2 text-center">41.26</td><td className="px-2 py-2 text-center">0.177</td><td className="px-2 py-2 text-center">-</td><td className="px-2 py-2 text-center">-</td><td className="px-2 py-2 text-center">-</td>
              </tr>
              <tr>
                <td className="px-3 py-2">GPT-4o Mini</td><td className={`px-2 py-2 text-center ${hl}`}>68.14</td><td className={`px-2 py-2 text-center ${hl}`}>70.38</td><td className={`px-2 py-2 text-center ${hl}`}>0.538</td><td className={`px-2 py-2 text-center ${hl}`}>65.99</td><td className={`px-2 py-2 text-center ${hl}`}>69.67</td><td className={`px-2 py-2 text-center ${hl}`}>0.496</td><td className={`px-2 py-2 text-center ${hl}`}>50.59</td><td className={`px-2 py-2 text-center ${hl}`}>52.73</td><td className={`px-2 py-2 text-center ${hl}`}>0.340</td><td className="px-2 py-2 text-center">-</td><td className="px-2 py-2 text-center">-</td><td className="px-2 py-2 text-center">-</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Llama 3-8B</td><td className="px-2 py-2 text-center">61.49</td><td className="px-2 py-2 text-center">62.57</td><td className="px-2 py-2 text-center">0.478</td><td className="px-2 py-2 text-center">54.92</td><td className="px-2 py-2 text-center">57.85</td><td className="px-2 py-2 text-center">0.409</td><td className="px-2 py-2 text-center">41.56</td><td className="px-2 py-2 text-center">44.79</td><td className="px-2 py-2 text-center">0.285</td><td className="px-2 py-2 text-center">-</td><td className="px-2 py-2 text-center">-</td><td className="px-2 py-2 text-center">-</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Mixtral</td><td className="px-2 py-2 text-center">59.74</td><td className="px-2 py-2 text-center">68.01</td><td className="px-2 py-2 text-center">0.531</td><td className="px-2 py-2 text-center">60.77</td><td className="px-2 py-2 text-center">66.71</td><td className="px-2 py-2 text-center">0.475</td><td className="px-2 py-2 text-center">43.67</td><td className="px-2 py-2 text-center">48.70</td><td className="px-2 py-2 text-center">0.308</td><td className="px-2 py-2 text-center">-</td><td className="px-2 py-2 text-center">-</td><td className="px-2 py-2 text-center">-</td>
              </tr>

              <tr className="bg-muted/60 border-t border-border/60">
                <td className="px-3 py-2 font-semibold" colSpan={13}>Image Captioning Baseline</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Gemini 1.5 Flash</td><td className="px-2 py-2 text-center">29.70</td><td className="px-2 py-2 text-center">30.79</td><td className="px-2 py-2 text-center">0.224</td><td className="px-2 py-2 text-center">30.12</td><td className="px-2 py-2 text-center">32.74</td><td className="px-2 py-2 text-center">0.219</td><td className="px-2 py-2 text-center">18.91</td><td className="px-2 py-2 text-center">19.45</td><td className="px-2 py-2 text-center">0.126</td><td className="px-2 py-2 text-center">21.44</td><td className="px-2 py-2 text-center">24.04</td><td className="px-2 py-2 text-center">0.156</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Gemini 2.0 Flash</td><td className={`px-2 py-2 text-center ${hl}`}>36.82</td><td className={`px-2 py-2 text-center ${hl}`}>38.45</td><td className={`px-2 py-2 text-center ${hl}`}>0.261</td><td className={`px-2 py-2 text-center ${hl}`}>36.82</td><td className={`px-2 py-2 text-center ${hl}`}>38.45</td><td className={`px-2 py-2 text-center ${hl}`}>0.261</td><td className={`px-2 py-2 text-center ${hl}`}>19.69</td><td className={`px-2 py-2 text-center ${hl}`}>20.50</td><td className={`px-2 py-2 text-center ${hl}`}>0.124</td><td className={`px-2 py-2 text-center ${hl}`}>25.09</td><td className={`px-2 py-2 text-center ${hl}`}>27.23</td><td className={`px-2 py-2 text-center ${hl}`}>0.185</td>
              </tr>

              <tr className="bg-muted/60 border-t border-border/60">
                <td className="px-3 py-2 font-semibold" colSpan={13}>Table as an Image Baseline</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Gemini 1.5 Flash</td><td className="px-2 py-2 text-center">38.39</td><td className="px-2 py-2 text-center">36.22</td><td className="px-2 py-2 text-center">0.178</td><td className="px-2 py-2 text-center">30.16</td><td className="px-2 py-2 text-center">31.30</td><td className="px-2 py-2 text-center">0.148</td><td className="px-2 py-2 text-center">25.14</td><td className="px-2 py-2 text-center">27.52</td><td className="px-2 py-2 text-center">0.113</td><td className="px-2 py-2 text-center">25.66</td><td className="px-2 py-2 text-center">27.80</td><td className="px-2 py-2 text-center">0.103</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Gemini 2.0 Flash</td><td className="px-2 py-2 text-center">40.44</td><td className="px-2 py-2 text-center">38.98</td><td className="px-2 py-2 text-center">0.212</td><td className="px-2 py-2 text-center">38.55</td><td className="px-2 py-2 text-center">38.18</td><td className="px-2 py-2 text-center">0.214</td><td className="px-2 py-2 text-center">33.83</td><td className="px-2 py-2 text-center">35.92</td><td className="px-2 py-2 text-center">0.199</td><td className="px-2 py-2 text-center">30.49</td><td className="px-2 py-2 text-center">34.05</td><td className="px-2 py-2 text-center">0.195</td>
              </tr>
              <tr>
                <td className="px-3 py-2">GPT-4o Mini</td><td className={`px-2 py-2 text-center ${hl}`}>48.96</td><td className={`px-2 py-2 text-center ${hl}`}>50.59</td><td className={`px-2 py-2 text-center ${hl}`}>0.357</td><td className={`px-2 py-2 text-center ${hl}`}>47.53</td><td className={`px-2 py-2 text-center ${hl}`}>49.78</td><td className={`px-2 py-2 text-center ${hl}`}>0.345</td><td className={`px-2 py-2 text-center ${hl}`}>38.86</td><td className={`px-2 py-2 text-center ${hl}`}>40.49</td><td className={`px-2 py-2 text-center ${hl}`}>0.265</td><td className={`px-2 py-2 text-center ${hl}`}>38.56</td><td className={`px-2 py-2 text-center ${hl}`}>41.11</td><td className={`px-2 py-2 text-center ${hl}`}>0.291</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Intern-VL-2.5</td><td className="px-2 py-2 text-center">19.55</td><td className="px-2 py-2 text-center">40.26</td><td className="px-2 py-2 text-center">0.199</td><td className="px-2 py-2 text-center">18.55</td><td className="px-2 py-2 text-center">38.53</td><td className="px-2 py-2 text-center">0.176</td><td className="px-2 py-2 text-center">16.42</td><td className="px-2 py-2 text-center">36.90</td><td className="px-2 py-2 text-center">0.153</td><td className="px-2 py-2 text-center">14.47</td><td className="px-2 py-2 text-center">38.63</td><td className="px-2 py-2 text-center">0.162</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Mantis</td><td className="px-2 py-2 text-center">20.85</td><td className="px-2 py-2 text-center">23.23</td><td className="px-2 py-2 text-center">0.109</td><td className="px-2 py-2 text-center">19.72</td><td className="px-2 py-2 text-center">20.90</td><td className="px-2 py-2 text-center">0.113</td><td className="px-2 py-2 text-center">20.88</td><td className="px-2 py-2 text-center">21.49</td><td className="px-2 py-2 text-center">0.110</td><td className="px-2 py-2 text-center">18.60</td><td className="px-2 py-2 text-center">20.26</td><td className="px-2 py-2 text-center">0.107</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Phi-3.5</td><td className="px-2 py-2 text-center">21.63</td><td className="px-2 py-2 text-center">23.86</td><td className="px-2 py-2 text-center">0.111</td><td className="px-2 py-2 text-center">18.09</td><td className="px-2 py-2 text-center">19.80</td><td className="px-2 py-2 text-center">0.076</td><td className="px-2 py-2 text-center">15.67</td><td className="px-2 py-2 text-center">16.96</td><td className="px-2 py-2 text-center">0.057</td><td className="px-2 py-2 text-center">17.81</td><td className="px-2 py-2 text-center">19.66</td><td className="px-2 py-2 text-center">0.093</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Qwen-2.5-VL</td><td className="px-2 py-2 text-center">34.61</td><td className="px-2 py-2 text-center">38.86</td><td className="px-2 py-2 text-center">0.174</td><td className="px-2 py-2 text-center">30.62</td><td className="px-2 py-2 text-center">34.58</td><td className="px-2 py-2 text-center">0.159</td><td className="px-2 py-2 text-center">19.64</td><td className="px-2 py-2 text-center">22.64</td><td className="px-2 py-2 text-center">0.108</td><td className="px-2 py-2 text-center">21.35</td><td className="px-2 py-2 text-center">24.38</td><td className="px-2 py-2 text-center">0.124</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Qwen-3-VL</td><td className="px-2 py-2 text-center">41.19</td><td className="px-2 py-2 text-center">45.66</td><td className="px-2 py-2 text-center">0.258</td><td className="px-2 py-2 text-center">38.82</td><td className="px-2 py-2 text-center">41.86</td><td className="px-2 py-2 text-center">0.305</td><td className="px-2 py-2 text-center">29.51</td><td className="px-2 py-2 text-center">31.85</td><td className="px-2 py-2 text-center">0.173</td><td className="px-2 py-2 text-center">32.48</td><td className="px-2 py-2 text-center">39.16</td><td className="px-2 py-2 text-center">0.228</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Table LLava-1.5-7B</td><td className="px-2 py-2 text-center">10.30</td><td className="px-2 py-2 text-center">11.43</td><td className="px-2 py-2 text-center">0.062</td><td className="px-2 py-2 text-center">12.68</td><td className="px-2 py-2 text-center">14.49</td><td className="px-2 py-2 text-center">0.063</td><td className="px-2 py-2 text-center">15.77</td><td className="px-2 py-2 text-center">16.52</td><td className="px-2 py-2 text-center">0.060</td><td className="px-2 py-2 text-center">10.95</td><td className="px-2 py-2 text-center">11.30</td><td className="px-2 py-2 text-center">0.050</td>
              </tr>

              <tr className="bg-muted/60 border-t border-border/60">
                <td className="px-3 py-2 font-semibold" colSpan={13}>Interleaved Baseline</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Gemini 1.5 Flash</td><td className="px-2 py-2 text-center">34.38</td><td className="px-2 py-2 text-center">35.24</td><td className="px-2 py-2 text-center">0.247</td><td className="px-2 py-2 text-center">31.55</td><td className="px-2 py-2 text-center">31.52</td><td className="px-2 py-2 text-center">0.210</td><td className="px-2 py-2 text-center">20.33</td><td className="px-2 py-2 text-center">20.47</td><td className="px-2 py-2 text-center">0.119</td><td className="px-2 py-2 text-center">26.29</td><td className="px-2 py-2 text-center">25.65</td><td className="px-2 py-2 text-center">0.175</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Gemini 2.0 Flash</td><td className="px-2 py-2 text-center">37.27</td><td className="px-2 py-2 text-center">38.47</td><td className="px-2 py-2 text-center">0.272</td><td className="px-2 py-2 text-center">34.08</td><td className="px-2 py-2 text-center">37.46</td><td className="px-2 py-2 text-center">0.231</td><td className="px-2 py-2 text-center">24.59</td><td className="px-2 py-2 text-center">25.75</td><td className="px-2 py-2 text-center">0.142</td><td className="px-2 py-2 text-center">26.38</td><td className="px-2 py-2 text-center">28.76</td><td className="px-2 py-2 text-center">0.176</td>
              </tr>
              <tr>
                <td className="px-3 py-2">GPT-4o Mini</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>47.74</td><td className="px-2 py-2 text-center">49.88</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>0.376</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>46.92</td><td className="px-2 py-2 text-center">48.96</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>0.348</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>36.41</td><td className="px-2 py-2 text-center">37.84</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>0.260</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>40.39</td><td className="px-2 py-2 text-center">42.64</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>0.303</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Mantis</td><td className="px-2 py-2 text-center">24.76</td><td className="px-2 py-2 text-center">26.45</td><td className="px-2 py-2 text-center">0.156</td><td className="px-2 py-2 text-center">24.37</td><td className="px-2 py-2 text-center">26.57</td><td className="px-2 py-2 text-center">0.150</td><td className="px-2 py-2 text-center">24.92</td><td className="px-2 py-2 text-center">26.58</td><td className="px-2 py-2 text-center">0.113</td><td className="px-2 py-2 text-center">20.70</td><td className="px-2 py-2 text-center">23.12</td><td className="px-2 py-2 text-center">0.126</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Phi-3.5</td><td className="px-2 py-2 text-center">20.85</td><td className="px-2 py-2 text-center">23.72</td><td className="px-2 py-2 text-center">0.120</td><td className="px-2 py-2 text-center">21.63</td><td className="px-2 py-2 text-center">23.61</td><td className="px-2 py-2 text-center">0.114</td><td className="px-2 py-2 text-center">23.83</td><td className="px-2 py-2 text-center">26.85</td><td className="px-2 py-2 text-center">0.134</td><td className="px-2 py-2 text-center">17.71</td><td className="px-2 py-2 text-center">18.95</td><td className="px-2 py-2 text-center">0.100</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Qwen-2.5-VL</td><td className="px-2 py-2 text-center">35.66</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>53.45</td><td className="px-2 py-2 text-center">0.271</td><td className="px-2 py-2 text-center">30.35</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>57.02</td><td className="px-2 py-2 text-center">0.258</td><td className="px-2 py-2 text-center">17.95</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>50.59</td><td className="px-2 py-2 text-center">0.146</td><td className="px-2 py-2 text-center">23.04</td><td className={`px-2 py-2 text-center ${hl} font-bold`}>47.94</td><td className="px-2 py-2 text-center">0.200</td>
              </tr>
              <tr>
                <td className="px-3 py-2">Qwen-3-VL</td><td className="px-2 py-2 text-center">41.19</td><td className="px-2 py-2 text-center">45.66</td><td className="px-2 py-2 text-center">0.358</td><td className="px-2 py-2 text-center">38.82</td><td className="px-2 py-2 text-center">41.86</td><td className="px-2 py-2 text-center">0.305</td><td className="px-2 py-2 text-center">29.51</td><td className="px-2 py-2 text-center">31.85</td><td className="px-2 py-2 text-center">0.173</td><td className="px-2 py-2 text-center">32.48</td><td className="px-2 py-2 text-center">39.16</td><td className="px-2 py-2 text-center">0.294</td>
              </tr>

              <tr className="border-t-2 border-border bg-muted/30 font-bold">
                <td className="px-3 py-2">Human Baseline</td><td className="px-2 py-2 text-center">78.4</td><td className="px-2 py-2 text-center">82.1</td><td className="px-2 py-2 text-center">0.76</td><td className="px-2 py-2 text-center">84.2</td><td className="px-2 py-2 text-center">87.3</td><td className="px-2 py-2 text-center">0.81</td><td className="px-2 py-2 text-center">75.8</td><td className="px-2 py-2 text-center">80.6</td><td className="px-2 py-2 text-center">0.73</td><td className="px-2 py-2 text-center">79.9</td><td className="px-2 py-2 text-center">83.7</td><td className="px-2 py-2 text-center">0.78</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-6 mb-2">
          <h3 className="font-serif text-lg font-semibold text-foreground">Baseline Details</h3>
        </div>
        <div className="mb-6 grid md:grid-cols-2 gap-4">
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-serif text-base font-semibold text-foreground">Missing Image Baseline</h4>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1">Image cells are removed, so models answer using only remaining table text and structure.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-serif text-base font-semibold text-foreground">Entity Replaced Baseline</h4>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1">Entity image references are replaced with text placeholders to test reliance on visual grounding.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-serif text-base font-semibold text-foreground">Image Captioning Baseline</h4>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1">Images are converted to captions first, and models reason over caption-augmented table content.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-serif text-base font-semibold text-foreground">Table as an Image Baseline</h4>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1">The entire table is treated as one image and solved as a pure vision-language task.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-serif text-base font-semibold text-foreground">Interleaved Baseline</h4>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1">Text and image evidence are provided together in sequence for joint multimodal reasoning.</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-serif text-base font-semibold text-foreground">Human Baseline</h4>
            <p className="text-muted-foreground text-xs leading-relaxed mt-1">Human annotator performance on a subset used as an upper-reference point.</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground mt-3">
          Performance analysis across question types. EM: Exact Match, SS: Substring Match, F1: F1 Score. Human Baseline denotes a subset of the data.
        </p>
        <p className="text-xs text-muted-foreground mt-1">tab:question_types_results</p>
      </div>
    </section>
  );
};

export default ResultsSection;
