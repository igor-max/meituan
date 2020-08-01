<template>
	<div class="alphabet-city">
		<div v-for="(item, index) in alphabetCity" :key="index" :id="'city'+'-'+item.alphabet">
			<span class="alphabet">
				{{ item.alphabet }}
			</span>
			<span class="city">
				<router-link to="/" v-for="(val, i) in item.city" :key="i">
					{{ val }}
				</router-link>
			</span>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ["alphabetCity"]
	}
</script>

<style type="text/css" lang="less">
	.alphabet-city>div {
		padding: 13px 30px 13px 10px;
    	border-radius: 10px;
        transition: background-color 500ms;
        .alphabet {
        	box-sizing: border-box;
		    vertical-align: top;
		    padding-top: 10px;
		    display: inline-block;
		    text-align: center;
		    width: 40px;
		    height: 40px;
		    border-radius: 50%;
		    color: #222222;
	        background: #FFD000;	
        }
        .city {
        	display: inline-block;
    		max-width: 1065px;
    		a {
    			margin: 10px 20px;
			    color: #666;
			    display: inline-block;
			    font-size: 14px;
    		}
    		a:hover {
			    color: #222222;
    			font-weight: 500;
    		}
        }
	}
	.alphabet-city>div:hover {
		background: #F8F8F8;
	}
</style>