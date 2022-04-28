import argparse
from prettytable import PrettyTable

class Stack:    
    
    def __init__(self,max_lim):
        self.__lis_of_eles=[]
        self.__max_lim=max_lim
        self.__top=-1

    def get_stack_eles(self):
        return self.__lis_of_eles
        

    def is_full(self):
        if(self.__top==self.__max_lim-1):
            return True
        else:
            return False

    def is_empty(self):
        if(self.__top==-1):
            return True
        else:
            return False

    def push(self,E):
        if(self.is_full()):
            print("Stack is full")
            return 
        else:
            self.__top+=1
            self.__lis_of_eles.insert(self.__top,E)
            #print("Pushed ele: ",self.__lis_of_eles[self.__top])
            
    def pop(self):
        if(self.is_empty()):
            print("Stack is empty")
            return
        else:
            del_ele=self.__lis_of_eles.pop(self.__top)
            #print("Deleted element: ",del_ele)            
            self.__top-=1
            return del_ele

   
    def fetch_top(self):
        return self.__top

    def display(self):
        i=self.__top
        for j in range(i,-1,-1):
            print(self.__lis_of_eles[j])



class Equation:

    #list of arithmetic operators according to precedence
    operators1=["*","/"]
    operators2=["-","+"]

    #only alphabet-operands:
    operands_lower_case=[chr(i) for i in range(ord("a"),ord("z")+1)]
    operands_upper_case=[chr(i) for i in range(ord("A"),ord("Z")+1)]
    
    def __init__(self,given):
        
        self.__c=0
        lis=given.split("=")  #lis[0]-location to store answer,lis[1]-location to store expression
        self.__res=lis[0]
        self.__expr=lis[1]
        self.__last_symbol=lis[1][-1]

    def get_c(self):
        return self.__c

        
    def get_result(self):
        return self.__res

    def get_expression(self):
        return self.__expr

    def get_last_symbol(self):
        return self.__last_symbol

    
    def is_operand(self,ele):
        if((ele not in Equation.operands_lower_case) and (ele not in Equation.operands_upper_case)):
            return False
        return True

    def is_operator(self,op):
        if((op in Equation.operators1) or (op in Equation.operators2)):        
            return True
        else:
            return False
        

    def validate(self):
        
        f=self.__expr[0]
        n=len(self.__expr)
        
        if((f not in Equation.operands_lower_case and f not in Equation.operands_upper_case) or
           (self.__last_symbol not in Equation.operands_lower_case and self.__last_symbol not in Equation.operands_upper_case)):
            
            return False

        s=Stack(n)

        for ele in self.__expr:
            if(s.is_empty()):
                if(self.is_operand(ele)):
                    s.push(ele)
                    self.__c+=1
                else:
                    
                    return False
            else:
                top_pos=s.fetch_top()
                stack_elements=s.get_stack_eles()
                
                if(self.is_operand(stack_elements[top_pos])):
                    if(self.is_operator(ele)):
                        s.push(ele)
                        
                    else:
                        return False
                    
                elif(self.is_operator(stack_elements[top_pos])):
                    if(self.is_operand(ele)):
                        s.push(ele)
                        self.__c+=1
                    else:
                        
                        return False
                else:
                    
                    return False

        
        return True     

    
class ThreeAddressCodeGenerator(Equation):
    
    def __init__(self,eqn):
        super().__init__(eqn)
        

    def generate(self):
        intermediate_code = []

        if(super().validate()==False):
            print("Invalid equation")
            return

        exp=super().get_expression()
        n=len(exp)
        
        sob=Stack(n)
        
        
        num=1
        i=0
        track=0
        

        while(i<n):

            e=exp[i]
            
            if(super().is_operator(e)):
                
                if e not in super().operators1:
                    sob.push(e)                    
                    i+=1
                    
                else:
                    track+=1
                    top_ele=sob.pop()
                    
                    
                    ch=str("t"+str(num))
                    
                    sob.push(ch)                 
                    
                    #print(ch)

                    if(track==1):
                        
                        
                        intermediate_code.append(ch+":="+top_ele+e+exp[i+1])
                        
                        
                    else:
                        
                        
                        intermediate_code.append(ch+":="+prev_val+e+exp[i+1])
                        
                        
                                                

                    prev_val=ch
                                      
                    num+=1                   
                    i+=2
                    
            else:
                sob.push(e)
                i+=1

            

        track1=0
        tracker=sob.fetch_top()
        
        while(tracker>-1):
            
            track1+=1
            
            operand2=sob.pop()
            operator=sob.pop()
            operand1=sob.pop()

            ch=str("t"+str(num))
            sob.push(ch)
            #print(ch)

            if(track==0 and track1==1):
                prev_val=ch

            if(track>=1):
                prev_val=operand2

           
            if(track1>1):
                
                
                intermediate_code.append(ch+":="+operand1+operator+prev_val)

                
                                
            else:
                
                
                intermediate_code.append(ch+":="+operand1+operator+operand2)
                
                
                                                
          
            num+=1
            tracker-=3
            prev_val=ch
        return intermediate_code

def generate_conditional_intermediate(lines):
    individual_lines = []
    x1 = PrettyTable()
    for entry in lines:
        x = []
        x = entry.split(" ")
        individual_lines.append(x)

    goto,code1 = [],[]
    for i in range(len(lines)):
        a = []
        if 'if' in lines[i]:
            a.append(lines[i])
            a.append('goto()')
            code1.append(a)
        elif 'return' in lines[i] or 'yeet' in lines[i]:
            a.append('t1')
            a.append('=')
            a.append(individual_lines[i][-1][:len(individual_lines[i][-1])-1])
            code1.append(a)
            if('if' in lines[i-1]):
                code1.append(['goto()'])
            else:
                goto.append(len(code1))
        elif 'else' not in lines[i]:
            a.append(lines[i])
            code1.append(a)

    goto.append(len(code1)+1)

    for i in range(len(code1)):
        if 'if' in code1[i][0]:
            code1[i][0] = code1[i][0].replace('A<B','!A<B')

    j=-1
    for i in range(len(code1)):
        if 'goto()' in code1[i][0]:
            j+=1
            code1[i][0] = code1[i][0].replace('goto()','goto('+str(goto[j])+')')
        elif 'goto()' in code1[i][-1]:
            j+=1
            code1[i][-1] = code1[i][-1].replace('goto()','goto('+str(goto[j])+')')

    
    f = open('conditional_intermediate.txt','w')
    x1.field_names = ['Index','Code']
    for i in range(len(code1)):
        code2 = ""
        for j in code1[i]:
            code2 += j
        x1.add_row([i+1,code2])
    x1.add_row([len(code1)+1,"END"])
    f.write('\n\nThe Three Address Code Generated is :\n\n')
    f.write(x1.get_string())

           

parser = argparse.ArgumentParser()
# add an argument called file
parser.add_argument("file", help="file to be parsed")

args = parser.parse_args()

f = open(args.file, "r")

code = f.read().splitlines()
f.close()

if(args.file == 'arithmetic.ys'):
    x1 = PrettyTable()
    equation = code[0]
    equation =  "".join(equation.split())
    T = ThreeAddressCodeGenerator(equation)
    intermediate_code = T.generate()

    out = open('arithmetic_intermediate.txt', 'w')
    x1.field_names = ['Index','Code']
    for line in intermediate_code:
        x1.add_row([intermediate_code.index(line)+1,line])
    x1.add_row([len(intermediate_code)+1,"END"])
    out.write('\n\nThe Three Address Code Generated is :\n\n')
    out.write(x1.get_string())
    out.close()
    
elif(args.file == 'conditional.ys'):
    generate_conditional_intermediate(code)
    



