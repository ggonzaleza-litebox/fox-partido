/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export default `

.match-header {
	background: #fff;
}

.match-header_teams {
	align-items: center;
	display: flex;
	justify-content: center;
}

.match-header_team {
	align-items: center;
	display: flex;
	width: 45%;
}

.match-header_teams .match-header_team:first-child {
	justify-content: flex-end;
	text-align: right;
}

.match-header_team h3 {
	color: #303030;
	font-size: 1.15em;
	font-weight: 400;
	margin-bottom: 0;
}

@media (max-width: 768px) {
	.match-header_team h3 {
		font-size: 1em;
	}
}

.match-header_team img {
	height: 40px;
	margin: 0 10px;
	width: 40px;
}


@media (max-width: 768px) {
	.match-header_team img {
		height: 36px;
		margin: 0 5px;
		width: 36px;
	}
}

.match-header_results {
	min-width: 90px;
    text-align: center;
}

@media (max-width: 768px) {
	.match-header_results {
		min-width: 80px;
	}
}

.match-header_results span {
	font-size: 1.4em;
	margin: 0 5px;
}

@media (max-width: 768px) {
	.match-header_results span {
		font-size: 1.2em;
		margin: 0 5px;
	}
}

.match-header .status {
	color: #999;
	display: block;
	font-size: .85em;
	text-align: center;
	text-transform: uppercase;
}

.match-header .tournament {
	display: block;
	font-size: .85em;
	margin: 10px 0;
	text-align: center;
} 

.match-header ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	text-align: center;
}

@media (max-width: 768px) {
	.match-header ul {
		display: flex;
		overflow-x: scroll;
	}
}

.match-header ul li {
	color: #999;
	cursor: pointer;
	display: inline-block;
	margin: 0 30px;
	padding: 10px 0;
	text-transform: uppercase;
}

@media (max-width: 768px) {
	.match-header ul li {
		margin: 0 15px;
		white-space: nowrap;
	}
}

.match-header ul li.active {
	color: #303030;
	border-bottom: 2px solid #007aff;
	font-weight: 600;
}

.tab {
  display: none;
}

@media (min-width: 768px) {
  .tab.align {
    display: block;
  }
}

.tab.active {
  display: block;
}

.stats .general-wrapper h2 {
	font-size: 1.25em;
	font-weight: 500;
}

.stats .sports-table_content-row {
	align-items: center;
	display: flex;
	justify-content: space-between;
	padding: 16px 14px;
}

.stats .sports-table_content-row h4 {
	color: #999;
	font-size: 1em;
	font-weight: 400;
	margin: 0;
	padding: 0;
	text-align: center;
	text-transform: uppercase;
	min-width: 80px;
}

.stats .column span {
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	height: 20px;
	margin: 0 12px 0 0;
	overflow: hidden;
	text-overflow: ellipsis;
}


.stats .sports-table_content-row .stat {
	color: #303030;
	font-size: 1em;
	line-height: 1.8em;
}


@media (max-width: 768px) {
	.stats .sports-table_content-row .column {
		font-size: 1.2em;
	}
}

.stats .sports-table_content-row:nth-of-type(even) {
	background: #fafafa;
}

.stats .sports-table_content-row:nth-of-type(odd) {
	background: #fff;
}

.summary .general-wrapper h2 {
	font-size: 1.25em;
	font-weight: 500;
}

.summary .column:nth-of-type(1) {
	color: #000;
	width: 100%;
}

.summary .sports-table_content-row {
	padding: 16px 14px;
}

.summary .sports-table_heading h4 {
	width: 100%;
}

.summary .column span {
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	display: -webkit-box;
	height: 20px;
	margin: 0 12px 0 0;
	overflow: hidden;
	text-overflow: ellipsis;
}

.summary .column.reverse {
	display: flex;
	flex-direction: row-reverse;
}

.summary .column.reverse span {
	margin: 0 0 0 12px;
}

.summary .sports-table_content-row .column i {
	margin: 0 15px 0 0;
}

.summary .sports-table_content-row .column.reverse i {
	margin: 0 0 0 15px;
}

.summary .sports-table_content-row img {
	display: inline-block;
	height: 28px;
    margin-right: 12px;
	text-align: center;
	width: 28px;
}

.summary .sports-table_content-row .minute {
	color: #999;
	font-size: .85em;
	line-height: 1.8em;
}

@media (max-width: 768px) {
	.summary .sports-table_content-row img {
		margin-right: 6px;
	}
}

.summary .sports-table_content-row .column:nth-of-type(1) {
	align-items: center;
	display: flex;
}

.summary .sports-table_content-row .column strong {
	font-size: 1.1em;
}

@media (max-width: 768px) {
	.summary .sports-table_content-row .column:nth-of-type(1), 
	.summary .sports-table_content-row .column:nth-of-type(2), 
	.summary .sports-table_content-row .column:nth-of-type(10) {
		font-size: 1.2em;
	}

	.summary .sports-table_content-row .column:nth-of-type(10) {
		line-height: 2em;
	}
}

.summary .sports-table_content-row:nth-of-type(even) {
	background: #fafafa;
}

.summary .sports-table_content-row:nth-of-type(odd) {
	background: #fff;
}

.summary .empty .circle {
  background: #ddd;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  margin: 50px auto 20px;
}

.summary .empty p {
  color: #ccc;
  text-align: center;
  margin-bottom: 150px;
}

.alignments .general-wrapper h2 {
	font-size: 1.25em;
	font-weight: 500;
}

.alignments .sports-table_subheading {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eeeff0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 4px;
  padding: 14px;
  text-transform: uppercase;
}

.alignments .sports-table_subheading h5 {
    color: #999;
    font-size: .75em;
    font-weight: 500;
    margin: 0;
    padding: 0;
}

.alignments .flag-arg {
    background-image: url(/assets/flag-arg.svg);
}

.alignments .column:nth-of-type(1) {
	width: 100%;
}

.alignments .football-field {
	background: url('/assets/campo_futbol.svg') center center no-repeat;
	background-size: 80%;
	height: 220px;
	position: relative;
}

.alignments .football-field_wrapper {
	background-color: #fff;
	width: 100%;
}

.alignments .football-field_local {
	left: 10%;
}

.alignments .football-field_visitante {
	right: 10%;
}

.alignments .football-field_local, 
.alignments .football-field_visitante {
	position: absolute;
	top: 14%;
	width: 40%;
}

@media (max-width: 1199px) {
	.alignments .football-field_local, 
  .alignments .football-field_visitante {
		top: 20%;
	}
}

@media (max-width: 991px) {
	.alignments .football-field_local, 
  .alignments .football-field_visitante {
		top: 28%;
	}
}

@media (max-width: 768px) {
	.alignments .football-field {
		background-size: 90%;
	}

	.alignments .football-field_local {
		left: 8%;
	}

	.alignments .football-field_visitante {
		right: 8%;
	}
}

@media (max-width: 576px) {
	.alignments .football-field {
		margin: 0 auto;
		width: 340px;
	}

	.alignments .football-field_local, 
  .alignments .football-field_visitante {
		top: 37%;
	}

	.alignments .football-field_local {
		left: 7.5%;
	}

	.alignments .football-field_visitante {
		right: 7.5%;
	}
}

.alignments .team-choice {
	display: none;
	list-style-type: none;
	margin: 0;
	padding: 0;
	width: 100%;
}

.alignments .team-choice li {
	border-radius: 2px;
	color: #999;
	cursor: pointer;
	font-size: .9em;
	padding: 14px;
	text-align: center;
	text-transform: uppercase;
	width: 50%;
}

.alignments .team-choice li:hover {
	color: #303030;
}

.alignments .team-choice li.active {
	background-color: #fff;
	color: #303030;
}


@media (max-width: 576px) {
	.alignments .team-choice {
		align-items: center;
		display: flex;
		justify-content: space-between;
	}
}


.alignments .sports-table_heading h4 {
	width: 100%;
}

.alignments .column span {
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 1;
	color: #303030;
	display: -webkit-box;
	height: 20px;
	margin: 0 12px 0 0;
	overflow: hidden;
	text-overflow: ellipsis;
}

.alignments .sports-table_content-row {
	padding: 18px 14px;
}

.alignments .sports-table_content-row .column:nth-of-type(1) {
	width: 80%;
}

.alignments .sports-table_content-row .column:nth-of-type(2) {
    min-width: 130px;
	width: 20%;
}

.alignments .sports-table_content-row i {
	height: 14px;
	margin-right: 15px;
}

.alignments .sports-table_content-row a {
	border: 1px solid #eeeff0; 
	border-radius: 4px;
	color: #999;
	font-size: .75em;
	font-weight: 600;
	padding: 8px 12px;
	text-transform: uppercase;
}

.alignments .sports-table_content-row a:hover {
	border: 1px solid #999;
	text-decoration: none;
}

@media (max-width: 768px) {
	.alignments .sports-table_content-row a {
		border: 0;
		color: transparent;
		display: inline-block;
		max-width: 6px;
		padding: 0;
		position: relative;
		text-indent: -999999999px;
	}

	.alignments .sports-table_content-row a:hover {
		border: 0;
	}

	.alignments .sports-table_content-row a::after {
		background: url('../assets/chevron-right.svg');
		content: "";
		float: right;
		height: 10px;
		position: absolute;
		right: 0;
		width: 6px;
	}
}

.alignments .sports-table_content-row img {
	display: inline-block;
	height: 28px;
    margin-right: 12px;
	text-align: center;
	width: 28px;
}

.alignments .sports-table_content-row .position {
	color: #999;
	font-size: .75em;
	line-height: 1.9em;
}

@media (max-width: 768px) {
	.alignments .sports-table_content-row img {
		margin-right: 6px;
	}
}

.alignments .sports-table_content-row .column:nth-of-type(1) {
	align-items: center;
	display: flex;
}

.alignments .sports-table_content-row .column strong {
	font-size: 1.1em;
}

@media (max-width: 768px) {
	.alignments .sports-table_content-row .column:nth-of-type(1), 
  .alignments .sports-table_content-row .column:nth-of-type(2), 
  .alignments .sports-table_content-row .column:nth-of-type(10) {
		font-size: 1.2em;
	}

	.alignments .sports-table_content-row .column:nth-of-type(10) {
		line-height: 2em;
	}
}

`;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm94LXBhcnRpZG8uY29tcG9uZW50LmNzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2ZveC1wYXJ0aWRvLyIsInNvdXJjZXMiOlsiYXBwL21vZHVsZXMvZm94LXBhcnRpZG8vZm94LXBhcnRpZG8uY29tcG9uZW50LmNzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQXFqQmQsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGBcblxuLm1hdGNoLWhlYWRlciB7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5tYXRjaC1oZWFkZXJfdGVhbXMge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLm1hdGNoLWhlYWRlcl90ZWFtIHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDQ1JTtcbn1cblxuLm1hdGNoLWhlYWRlcl90ZWFtcyAubWF0Y2gtaGVhZGVyX3RlYW06Zmlyc3QtY2hpbGQge1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXHR0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1hdGNoLWhlYWRlcl90ZWFtIGgzIHtcblx0Y29sb3I6ICMzMDMwMzA7XG5cdGZvbnQtc2l6ZTogMS4xNWVtO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRtYXJnaW4tYm90dG9tOiAwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0Lm1hdGNoLWhlYWRlcl90ZWFtIGgzIHtcblx0XHRmb250LXNpemU6IDFlbTtcblx0fVxufVxuXG4ubWF0Y2gtaGVhZGVyX3RlYW0gaW1nIHtcblx0aGVpZ2h0OiA0MHB4O1xuXHRtYXJnaW46IDAgMTBweDtcblx0d2lkdGg6IDQwcHg7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5tYXRjaC1oZWFkZXJfdGVhbSBpbWcge1xuXHRcdGhlaWdodDogMzZweDtcblx0XHRtYXJnaW46IDAgNXB4O1xuXHRcdHdpZHRoOiAzNnB4O1xuXHR9XG59XG5cbi5tYXRjaC1oZWFkZXJfcmVzdWx0cyB7XG5cdG1pbi13aWR0aDogOTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQubWF0Y2gtaGVhZGVyX3Jlc3VsdHMge1xuXHRcdG1pbi13aWR0aDogODBweDtcblx0fVxufVxuXG4ubWF0Y2gtaGVhZGVyX3Jlc3VsdHMgc3BhbiB7XG5cdGZvbnQtc2l6ZTogMS40ZW07XG5cdG1hcmdpbjogMCA1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQubWF0Y2gtaGVhZGVyX3Jlc3VsdHMgc3BhbiB7XG5cdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRtYXJnaW46IDAgNXB4O1xuXHR9XG59XG5cbi5tYXRjaC1oZWFkZXIgLnN0YXR1cyB7XG5cdGNvbG9yOiAjOTk5O1xuXHRkaXNwbGF5OiBibG9jaztcblx0Zm9udC1zaXplOiAuODVlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWF0Y2gtaGVhZGVyIC50b3VybmFtZW50IHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogLjg1ZW07XG5cdG1hcmdpbjogMTBweCAwO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59IFxuXG4ubWF0Y2gtaGVhZGVyIHVsIHtcblx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5tYXRjaC1oZWFkZXIgdWwge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0b3ZlcmZsb3cteDogc2Nyb2xsO1xuXHR9XG59XG5cbi5tYXRjaC1oZWFkZXIgdWwgbGkge1xuXHRjb2xvcjogIzk5OTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbjogMCAzMHB4O1xuXHRwYWRkaW5nOiAxMHB4IDA7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQubWF0Y2gtaGVhZGVyIHVsIGxpIHtcblx0XHRtYXJnaW46IDAgMTVweDtcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHR9XG59XG5cbi5tYXRjaC1oZWFkZXIgdWwgbGkuYWN0aXZlIHtcblx0Y29sb3I6ICMzMDMwMzA7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDA3YWZmO1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4udGFiIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC50YWIuYWxpZ24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi50YWIuYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zdGF0cyAuZ2VuZXJhbC13cmFwcGVyIGgyIHtcblx0Zm9udC1zaXplOiAxLjI1ZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5zdGF0cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRwYWRkaW5nOiAxNnB4IDE0cHg7XG59XG5cbi5zdGF0cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IGg0IHtcblx0Y29sb3I6ICM5OTk7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRmb250LXdlaWdodDogNDAwO1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0bWluLXdpZHRoOiA4MHB4O1xufVxuXG4uc3RhdHMgLmNvbHVtbiBzcGFuIHtcblx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRtYXJnaW46IDAgMTJweCAwIDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5cbi5zdGF0cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5zdGF0IHtcblx0Y29sb3I6ICMzMDMwMzA7XG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRsaW5lLWhlaWdodDogMS44ZW07XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG5cdC5zdGF0cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW4ge1xuXHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdH1cbn1cblxuLnN0YXRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3c6bnRoLW9mLXR5cGUoZXZlbikge1xuXHRiYWNrZ3JvdW5kOiAjZmFmYWZhO1xufVxuXG4uc3RhdHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdzpudGgtb2YtdHlwZShvZGQpIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnN1bW1hcnkgLmdlbmVyYWwtd3JhcHBlciBoMiB7XG5cdGZvbnQtc2l6ZTogMS4yNWVtO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuXG4uc3VtbWFyeSAuY29sdW1uOm50aC1vZi10eXBlKDEpIHtcblx0Y29sb3I6ICMwMDA7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IHtcblx0cGFkZGluZzogMTZweCAxNHB4O1xufVxuXG4uc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2hlYWRpbmcgaDQge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLnN1bW1hcnkgLmNvbHVtbiBzcGFuIHtcblx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcblx0LXdlYmtpdC1saW5lLWNsYW1wOiAxO1xuXHRkaXNwbGF5OiAtd2Via2l0LWJveDtcblx0aGVpZ2h0OiAyMHB4O1xuXHRtYXJnaW46IDAgMTJweCAwIDA7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc3VtbWFyeSAuY29sdW1uLnJldmVyc2Uge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5zdW1tYXJ5IC5jb2x1bW4ucmV2ZXJzZSBzcGFuIHtcblx0bWFyZ2luOiAwIDAgMCAxMnB4O1xufVxuXG4uc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW4gaSB7XG5cdG1hcmdpbjogMCAxNXB4IDAgMDtcbn1cblxuLnN1bW1hcnkgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uLnJldmVyc2UgaSB7XG5cdG1hcmdpbjogMCAwIDAgMTVweDtcbn1cblxuLnN1bW1hcnkgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyBpbWcge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGhlaWdodDogMjhweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6IDI4cHg7XG59XG5cbi5zdW1tYXJ5IC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLm1pbnV0ZSB7XG5cdGNvbG9yOiAjOTk5O1xuXHRmb250LXNpemU6IC44NWVtO1xuXHRsaW5lLWhlaWdodDogMS44ZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IGltZyB7XG5cdFx0bWFyZ2luLXJpZ2h0OiA2cHg7XG5cdH1cbn1cblxuLnN1bW1hcnkgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uOm50aC1vZi10eXBlKDEpIHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcbn1cblxuLnN1bW1hcnkgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uIHN0cm9uZyB7XG5cdGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW46bnRoLW9mLXR5cGUoMSksIFxuXHQuc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW46bnRoLW9mLXR5cGUoMiksIFxuXHQuc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IC5jb2x1bW46bnRoLW9mLXR5cGUoMTApIHtcblx0XHRmb250LXNpemU6IDEuMmVtO1xuXHR9XG5cblx0LnN1bW1hcnkgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uOm50aC1vZi10eXBlKDEwKSB7XG5cdFx0bGluZS1oZWlnaHQ6IDJlbTtcblx0fVxufVxuXG4uc3VtbWFyeSAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93Om50aC1vZi10eXBlKGV2ZW4pIHtcblx0YmFja2dyb3VuZDogI2ZhZmFmYTtcbn1cblxuLnN1bW1hcnkgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdzpudGgtb2YtdHlwZShvZGQpIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnN1bW1hcnkgLmVtcHR5IC5jaXJjbGUge1xuICBiYWNrZ3JvdW5kOiAjZGRkO1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA3NXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDUwcHggYXV0byAyMHB4O1xufVxuXG4uc3VtbWFyeSAuZW1wdHkgcCB7XG4gIGNvbG9yOiAjY2NjO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuXG4uYWxpZ25tZW50cyAuZ2VuZXJhbC13cmFwcGVyIGgyIHtcblx0Zm9udC1zaXplOiAxLjI1ZW07XG5cdGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hbGlnbm1lbnRzIC5zcG9ydHMtdGFibGVfc3ViaGVhZGluZyB7XG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZmYwO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgcGFkZGluZzogMTRweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9zdWJoZWFkaW5nIGg1IHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBmb250LXNpemU6IC43NWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5hbGlnbm1lbnRzIC5mbGFnLWFyZyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvZmxhZy1hcmcuc3ZnKTtcbn1cblxuLmFsaWdubWVudHMgLmNvbHVtbjpudGgtb2YtdHlwZSgxKSB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGQge1xuXHRiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvY2FtcG9fZnV0Ym9sLnN2ZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXNpemU6IDgwJTtcblx0aGVpZ2h0OiAyMjBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGRfd3JhcHBlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGRfbG9jYWwge1xuXHRsZWZ0OiAxMCU7XG59XG5cbi5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF92aXNpdGFudGUge1xuXHRyaWdodDogMTAlO1xufVxuXG4uYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGRfbG9jYWwsIFxuLmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkX3Zpc2l0YW50ZSB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAxNCU7XG5cdHdpZHRoOiA0MCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5cHgpIHtcblx0LmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkX2xvY2FsLCBcbiAgLmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkX3Zpc2l0YW50ZSB7XG5cdFx0dG9wOiAyMCU7XG5cdH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG5cdC5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF9sb2NhbCwgXG4gIC5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF92aXNpdGFudGUge1xuXHRcdHRvcDogMjglO1xuXHR9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGQge1xuXHRcdGJhY2tncm91bmQtc2l6ZTogOTAlO1xuXHR9XG5cblx0LmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkX2xvY2FsIHtcblx0XHRsZWZ0OiA4JTtcblx0fVxuXG5cdC5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF92aXNpdGFudGUge1xuXHRcdHJpZ2h0OiA4JTtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcblx0LmFsaWdubWVudHMgLmZvb3RiYWxsLWZpZWxkIHtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHR3aWR0aDogMzQwcHg7XG5cdH1cblxuXHQuYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGRfbG9jYWwsIFxuICAuYWxpZ25tZW50cyAuZm9vdGJhbGwtZmllbGRfdmlzaXRhbnRlIHtcblx0XHR0b3A6IDM3JTtcblx0fVxuXG5cdC5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF9sb2NhbCB7XG5cdFx0bGVmdDogNy41JTtcblx0fVxuXG5cdC5hbGlnbm1lbnRzIC5mb290YmFsbC1maWVsZF92aXNpdGFudGUge1xuXHRcdHJpZ2h0OiA3LjUlO1xuXHR9XG59XG5cbi5hbGlnbm1lbnRzIC50ZWFtLWNob2ljZSB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmFsaWdubWVudHMgLnRlYW0tY2hvaWNlIGxpIHtcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xuXHRjb2xvcjogIzk5OTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRmb250LXNpemU6IC45ZW07XG5cdHBhZGRpbmc6IDE0cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0d2lkdGg6IDUwJTtcbn1cblxuLmFsaWdubWVudHMgLnRlYW0tY2hvaWNlIGxpOmhvdmVyIHtcblx0Y29sb3I6ICMzMDMwMzA7XG59XG5cbi5hbGlnbm1lbnRzIC50ZWFtLWNob2ljZSBsaS5hY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRjb2xvcjogIzMwMzAzMDtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcblx0LmFsaWdubWVudHMgLnRlYW0tY2hvaWNlIHtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG59XG5cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9oZWFkaW5nIGg0IHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5hbGlnbm1lbnRzIC5jb2x1bW4gc3BhbiB7XG5cdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG5cdC13ZWJraXQtbGluZS1jbGFtcDogMTtcblx0Y29sb3I6ICMzMDMwMzA7XG5cdGRpc3BsYXk6IC13ZWJraXQtYm94O1xuXHRoZWlnaHQ6IDIwcHg7XG5cdG1hcmdpbjogMCAxMnB4IDAgMDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5hbGlnbm1lbnRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cge1xuXHRwYWRkaW5nOiAxOHB4IDE0cHg7XG59XG5cbi5hbGlnbm1lbnRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLmNvbHVtbjpudGgtb2YtdHlwZSgxKSB7XG5cdHdpZHRoOiA4MCU7XG59XG5cbi5hbGlnbm1lbnRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLmNvbHVtbjpudGgtb2YtdHlwZSgyKSB7XG4gICAgbWluLXdpZHRoOiAxMzBweDtcblx0d2lkdGg6IDIwJTtcbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyBpIHtcblx0aGVpZ2h0OiAxNHB4O1xuXHRtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5hbGlnbm1lbnRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgYSB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNlZWVmZjA7IFxuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdGNvbG9yOiAjOTk5O1xuXHRmb250LXNpemU6IC43NWVtO1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRwYWRkaW5nOiA4cHggMTJweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyBhOmhvdmVyIHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzk5OTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyBhIHtcblx0XHRib3JkZXI6IDA7XG5cdFx0Y29sb3I6IHRyYW5zcGFyZW50O1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0XHRtYXgtd2lkdGg6IDZweDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR0ZXh0LWluZGVudDogLTk5OTk5OTk5OXB4O1xuXHR9XG5cblx0LmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyBhOmhvdmVyIHtcblx0XHRib3JkZXI6IDA7XG5cdH1cblxuXHQuYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IGE6OmFmdGVyIHtcblx0XHRiYWNrZ3JvdW5kOiB1cmwoJy4uL2Fzc2V0cy9jaGV2cm9uLXJpZ2h0LnN2ZycpO1xuXHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdGhlaWdodDogMTBweDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0cmlnaHQ6IDA7XG5cdFx0d2lkdGg6IDZweDtcblx0fVxufVxuXG4uYWxpZ25tZW50cyAuc3BvcnRzLXRhYmxlX2NvbnRlbnQtcm93IGltZyB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0aGVpZ2h0OiAyOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR3aWR0aDogMjhweDtcbn1cblxuLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAucG9zaXRpb24ge1xuXHRjb2xvcjogIzk5OTtcblx0Zm9udC1zaXplOiAuNzVlbTtcblx0bGluZS1oZWlnaHQ6IDEuOWVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyBpbWcge1xuXHRcdG1hcmdpbi1yaWdodDogNnB4O1xuXHR9XG59XG5cbi5hbGlnbm1lbnRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLmNvbHVtbjpudGgtb2YtdHlwZSgxKSB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG59XG5cbi5hbGlnbm1lbnRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLmNvbHVtbiBzdHJvbmcge1xuXHRmb250LXNpemU6IDEuMWVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcblx0LmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uOm50aC1vZi10eXBlKDEpLCBcbiAgLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uOm50aC1vZi10eXBlKDIpLCBcbiAgLmFsaWdubWVudHMgLnNwb3J0cy10YWJsZV9jb250ZW50LXJvdyAuY29sdW1uOm50aC1vZi10eXBlKDEwKSB7XG5cdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0fVxuXG5cdC5hbGlnbm1lbnRzIC5zcG9ydHMtdGFibGVfY29udGVudC1yb3cgLmNvbHVtbjpudGgtb2YtdHlwZSgxMCkge1xuXHRcdGxpbmUtaGVpZ2h0OiAyZW07XG5cdH1cbn1cblxuYFxuIl19