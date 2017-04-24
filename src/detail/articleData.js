	
	//articles是一个数组，存储3个文章对象，每个对象有一个id属性，有一个article对象(这个对象是包含一篇文章所有信息)
	var articles = [
					//第一篇
					{id:'#article1',
					article:{
								title:'精选段子：亲爱的，找个有钱的女朋友怎么就伤你自尊了？',
								author:{
									name:'张三',
									logo:'./image/user1.jpg'
								},
								time:'04-23 11:11',
								content:
								"<p>千万不要碍着大熊猫吃东西，即使你是小熊猫也不行</p><img src='./image/1.gif'/><h2>完全符合气质</h2><img src='./image/2.gif'/><h2>要是没人进来那多尴尬</h2><img src='./image/4.gif'/><h2>走，去澳大利亚抓袋鼠去</h2><img src='./image/3.gif'/>",
								discussList:[
												{username:'李四',logo:'./image/user2.jpg',agree:10,say:'段7:“两口”圈起来，期中考试要考的。段9:“我真的是修手机的，但是拆手机之前我一般都要问进的什么水”？'},
												{username:'李四',logo:'./image/user3.jpg',agree:10,say:'段7:“两口”圈起来，期中考试要考的。段9:“我真的是修手机的，但是拆手机之前我一般都要问进的什么水”？'}
												
											]
							}
					},

					//第二篇
					{id:'#article2',
					article:{
								title:'人民的名义 | 我见过的那些贪官太太',
								author:{
									name:'王五',
									logo:'./image/user2.jpg'
								},
								time:'04-24 14:14',
								content:
								`<p>《人民的名义》热播中，赵德汉、丁义珍等腐败分子的形象被刻画得入木三分，可是却对贪官背后的太太们着色不多。相信很多人都如小编一样，好奇贪官身后那些鲜为人知的太太们...</p>
								<img src='./image/article2_1.jpg'/>
								<p>一说到官太太，你脑海中显现的形象是什么样的？身披貂皮大衣、手挽爱马仕包包，翡翠钻石挂满脖子耳朵，宝石戒指戴满每一根圆滚滚的指头？整天有人鞍前马后她还鼻孔朝天颐指气使？这种贪官太太形象就是大写的“金钱”和“贪念”，会被人嗤之以鼻。云南省原省委书记白恩培收受贿赂近2.5亿元，创下十八大以来省部级以上官员受贿金额最高纪录。白恩培频繁收受钱财，他的妻子张慧清也在其中扮演了极不光彩的角色，在云南当地就流传着一句话，“有事找张姐，在云南没有张姐办不了的事。”张慧清在前台办事收钱，收受的单只镯子价值高达1500万元人民币，白恩培在幕后默默支持。</p>
								<img src= './image/article2_2.jpg' />
								<p>今天笔者要说的那些官太太，不是“张姐”那样狐假虎威，丈夫在后台办事，她负责在前台收钱的太太，而只是办案过程中遇见的那些普通官太太们，也仅谈谈她们在丈夫被检察院以受贿罪立案调查后形形色色的反应。</p>`,
								discussList:[
												{username:'李四',logo:'./image/user1.jpg',agree:90,say:'妻贤夫少祸！'},
												{username:'李四',logo:'./image/user3.jpg',agree:10,say:'段7:“两口”圈起来，期中考试要考的。段9:“我真的是修手机的，但是拆手机之前我一般都要问进的什么水”？'}
												
											]
							}
					},

					//第三篇	
					{id:'#article3',
					article:{
								title:'微软RobustFill：无需编程语言，神经网络自动生成程序',
								author:{
									name:'码农',
									logo:'./image/user3.jpg'
								},
								time:'04-24 17:17',
								content:
								`
								<img src='./image/article3_1.jpg'/>
								<p>在过去几十年中，计算机科学有了长足的发展，但人们编写计算机软件的过程却没有发生根本的改变——程序员必须使用特定的程序语言一步步手工编写程序的精确算法逻辑。尽管编程语言近年来正在变得越来越友好，但这项工作仍然是绝大多数计算机用户未曾接触的事物。</p>
								<p>在最近的一项研究中，微软发布了自己的深度学习程序生成研究。在该研究中，深度神经网络学会了遵从用户的意图来生成计算机程序。用户只需要提供一些简单的输入/输出（I/O）范例以表示自己希望获得的程序是什么形式的。系统就可以使用这些信息生成相应的程序。</p>
								<img src= './image/article3_2.jpg' />
								<p>微软提出的新系统 RobustFill 采用了最近发展迅猛的深度学习方式，通过数据驱动方法进行程序生成，不需要任何手工编写的规则。与快速填充相反，它使用曾被用于机器翻译的「attentional sequence-to-sequence 神经网络」来通过 I/O 范例生成所需的程序。下图展示了微软的神经网络架构：</p>
								<img src='./image/article3_3.jpg'/>
								<p>这个系统经过了数百万随机生成的 I/O 程序配对的训练，学会了 DSL 中的语义学规则，目前已经可以在真实情况下的数据中展示良好的性能。总体而言，该系统在一个真实世界任务基准测试中达到了 92% 的准确率。其中最令人兴奋的是，在测试中，I/O 范例包含了一些明显的噪音，而系统仍然保持了高精度。</p>`,
								discussList:[
												{username:'李四',logo:'./image/user1.jpg',agree:90,say:'上帝不想写程序 发明了人类 人类也想偷懒 发明了自动编程！'},
												{username:'李四',logo:'./image/user2.jpg',agree:10,say:'我还以为什么程序都能写，搞了半天针对特定问题的，这也拿来吹。还有就是那个什么微软小冰，成天吹多少智能，试了一下，和白痴无异。通用型的人工智能超越人类为时尚早'}
												
											]
								
							}	
					}
				];
	//推荐文章
	var recommends =[
						{title:'阿里巴巴双十二总收益有！！！',author:'李四',time:'04-23',pic:'./image/rec_1.png',url:'#article1'},
						{title:'人民的名义谜底揭晓！祁同伟为啥要把手机卡冲进马桶',author:'李四',time:'04-23',pic:'./image/rec_2.png',url:'#article2'},
						{title:'共享单车时代来临',author:'李四',time:'04-23',pic:'./image/rec_3.png',url:'#article3'},
						{title:'原来手机维修还可以这样！厉害了我的国美管家',author:'李四',time:'04-23',pic:'./image/rec_4.png',url:'#article1'},
						{title:'让人越活越年轻的手游：王者荣耀',author:'李四',time:'04-23',pic:'./image/rec_5.png',url:'#article2'},
						{title:'阿里巴巴双十二总收益有！！！',author:'李四',time:'04-23',pic:'./image/rec_1.png',url:'#article3'},
						{title:'人民的名义谜底揭晓！祁同伟为啥要把手机卡冲进马桶',author:'李四',time:'04-23',pic:'./image/rec_2.png',url:'#article1'},
						{title:'共享单车时代来临',author:'李四',time:'04-23',pic:'./image/rec_3.png',url:'#article2'},
						{title:'原来手机维修还可以这样！厉害了我的国美管家',author:'李四',time:'04-23',pic:'./image/rec_4.png',url:'#article3'},
						{title:'让人越活越年轻的手游：王者荣耀',author:'李四',time:'04-23',pic:'./image/rec_5.png',url:'#article4'}
	];