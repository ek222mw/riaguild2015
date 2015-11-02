
var React = require("react"),
	_ = require("lodash"),
	Link = require("react-router").Link,
	members = require("../data/members"),
	Icon = require("./icon"),
	markdown = require("markdown").markdown;

var Member = React.createClass({
	render: function(){
		var data = members[this.props.params.name],
			posts = data.blogposts.map(function(post,n){
				return <li key={n}><a target="_blank" href={post.url}>{post.title+" ("+post.when+")"}</a></li>;
			});
		return (
			<div>
				<Link to="/">Back to list</Link>
				<h3>{data.name}</h3>

				<p><Icon icon={data.icon} /></p>				

				<div dangerouslySetInnerHTML={{__html:markdown.toHTML(data.presentation)}}/>
				<h3>Contact</h3>
				Github: {data.github}, Slack: {data.slack}
				{data.projectrepo && (
					<div>
						<h3>Project</h3>
						{data.projectdesc+" "} 
						  (<a href={"http://github.com/"+data.github+"/"+data.projectrepo}>code</a>) 
						  (<a href={"http://"+data.github+".github.io/"+data.projectrepo}>run</a>) 
					</div>
				)}
				<h3>Blog posts:</h3>
				<ul>{posts}</ul>
			</div>
		);
	}
});

module.exports = Member;
